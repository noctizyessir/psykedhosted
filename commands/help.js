const Discord = require("discord.js");
const recon = require('reconlx')
const paginationEmbed = require('discord.js-pagination');


module.exports.run = async (bot, message, args) => {
    var embedmod = new Discord.MessageEmbed()
    .addFields({name: 'moderation stuff:', value: '```kick\n ban \n unban \n hackban \n warn \n mute \n unmute \n clear \n kick \n setmod \n jail \n unjail \n antiraid \n addrole \n removerole \n snipe ```', inline: true})

    var embedgif = new Discord.MessageEmbed()
    .addFields({name: "gifs stuff:", value: '```nice\n clap \n giphy \n laugh \n bigsad \n huh \n letsgoo \n sus \n dafoe \n codegeass \n deathnote \n dororo \n nice \n carti \n uzi \n travisscott```', inline: true})

    var embedabtbot = new Discord.MessageEmbed()
    .addFields({name: "info:", value: "```devs\n devs \n spotifyplaylist \n instagram \n twitter \n botdescription \n errors \n poll \n customembed \n rules \n userinfo \n avatar \n reactionroles \n help \n setprefix \n serverinfo ```", inline: true})    
    
    var embedintergrations = new Discord.MessageEmbed()
    .addFields({name: "intergrations:", value:"```bruh\n covid \n searchinsta \n wikipedia \n searchtwitter \n urbandictionary \n steam  ```"})

    var embedmereddit = new Discord.MessageEmbed()
    .addFields({name: "memes/reddit:", value: '```meme\n meme \n subreddit \n animememe \n cartisub \n wallstreetbets \n travissub \n fhopsin \n uzisub```', inline: true})

    var embedmusic = new Discord.MessageEmbed()
    .addFields({name: "music:", value: "```play\n play \n resume \n skip \n disconnect \n playskip \n loop \n pause \n queue ```", inline: true})

    var embedrandom = new Discord.MessageEmbed()
    .addFields({name: "random stuff:", value: "```bruh\n ping \n greatjacket \n bruh \n youeatpoopoo \n giveawaycreate \n drip \n math \n hack \n howswag \n dm \n arrest \n wagwan```", inline: true})




    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'moderation') {
        return message.channel.send(embedmod)
    }
    if(helpArgs[0] === 'gif') {
        return message.channel.send(embedgif)
    }
    if(helpArgs[0] === 'info') {
        return message.channel.send(embedabtbot)
    }
    if(helpArgs[0] === 'intergrations') {
        return message.channel.send(embedintergrations)
    }
    if(helpArgs[0] === 'memereddit') {
        return message.channel.send(embedmereddit)
    }
    if(helpArgs[0] === 'music') {
        return message.channel.send(embedmusic)
    }
    if(helpArgs[0] === 'random') {
        return message.channel.send(embedrandom)
    }
    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`default prefix: ;`)
            .setTitle('here are the commands g:')  
            .setThumbnail('https://i.pinimg.com/originals/fb/61/b5/fb61b5869d7192528104009eba8573f5.gif')
            .addField('Moderation:', '> help moderation', true)
            .addField('GIF:', '> help gif', true)
            .addField('Info:', '> help info', true)
            .addField('Intergrations:', '> help intergrations', true)
            .addField('Meme/Reddit:', '> help memereddit', true)
            .addField('Music:', '> help music', true)
            .addField('Random:', '> help random', true)
            .setFooter('help (command) for more details')
            .setColor('#0E6655')

        message.channel.send(embed)
        
    
        
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
**Command's Description:** ${command.config.description || "There is no Description for this command."}
**Command's Usage:** ${command.config.usage || "No Usage"}
**Command's Permissions:** ${command.config.accessableby || "Members"}
**Command's Aliases:** ${command.config.aliases || "No Aliases"}
            `)
            .setColor('#00FF0A')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "well help members? i guess",
    usage: ";help",
    accessableby: "Members",
    aliases: ['commands']
}
