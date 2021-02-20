const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const DisTube = require('distube')
const mongoose = require('mongoose')
const fetch = require('node-fetch')
const recon = require('reconlx')


const bot = new Discord.Client({disableEveryone: true}, {partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = require('./models/prefix')
mongoose.connect('mongodb+srv://Noctiz:makankambing089@fouxbotdatabase.6q23m.mongodb.net/data', { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)

const { GiveawayCreator } = require('discord-giveaway');
const Creator = new GiveawayCreator(bot, 'mongodb+srv://Noctiz:makankambing089@fouxbotdatabase.6q23m.mongodb.net/data');


bot.giveaways = Creator; // Access the Creator from anywhere.

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true});//the partials thingy are done


bot.distube.on("playSong", (message, queue, song) => {
    var embed = new Discord.MessageEmbed()
    .setTitle(`now playing:`)
    .setDescription(`[${song.name}](${song.url})`)
    .addFields({ name: 'added by:', value: `${song.user}`, inline: true})
    .setColor('GRAY')
    
    message.channel.send(embed)
});

bot.distube.on("addSong", (message, queue, song) => {
    var embed = new Discord.MessageEmbed()
    .setTitle(`added to queue:`)
    .setDescription(`[${song.name}](${song.url})`)
    .addFields({ name: 'added by:', value: `${song.user}`, inline: true})
    .setColor('GREY')
    
    message.channel.send(embed)

});


bot.distube.on("playList", (message, queue, playlist, song) => {
    const status = `Volume: ${queue.volume}\n Loop: ${queue.repeatMode ? queue.repeatMode == 2 ? "Server Queue" : "This Song" : "off"} \n Autoplay: ${queue.autoplay ? "on" : "off"}`;
    var embed = new Discord.MessageEmbed()
    .setTitle(`Now Playing Playlist:`)
    .setDescription(`[${playlist.name}](${playlist.url}) \n There are ${playlist.songs.length} songs in this Playlist \n **Now Playing Song:** [${song.name}](${song.url})`)
    .addFields({ name: 'Status:', value: `${status}`})
    .addFields({ name: 'Added by:', value: `${song.user}`, inline: true})
    .setColor('GRAY')

    message.channel.send(embed)
});


bot.distube.on("addList", (message, queue, playlist) => {
    const status2 = `Volume: ${queue.volume}\n Loop: ${queue.repeatMode ? queue.repeatMode == 2 ? "Server Queue" : "This Song" : "off"}\n Autoplay: ${queue.autoplay ? "on" : "off"}`;
    var embed = new Discord.MessageEmbed()
    .setTitle(`Added to the queue:`)
    .setDescription(`[${playlist.name}](${playlist.url}) \n There are ${playlist.songs.length} songs in this Playlist \n`)
    .addFields({ name: 'Status:', value: `${status2}`})
    .addFields({ name: 'Added by:', value: `${playlist.user}`, inline: true})
    .setColor('GREY')

    message.channel.send(embed)    
});



bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
    welcomeChannel.send (`Welcome! ${member}`)
})

bot.on("messageDelete", async (message) => {
    require("./events/messageDelete")(message);
  });


bot.on('message', async (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;

    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    //If there was a data, use the database prefix BUT if there is no data, use the default prefix which you have to set!
    if(data) {
        const prefix = data.Prefix;

        if (!message.content.startsWith(prefix)) return;
        const commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(bot, message, args);
    } else if (!data) {
        //set the default prefix here
        const prefix = ";";
        
        if (!message.content.startsWith(prefix)) return;
        const commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(bot, message, args);
    }
})


require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});



bot.login(process.env.token);