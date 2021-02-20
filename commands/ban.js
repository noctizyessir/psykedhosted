const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message) => {
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

    const reason = args[1] || "There was no reason!";

    
    var embed = new Discord.MessageEmbed()
    .setTitle('You have been banned')
    .setDescription(`Server: ${message.guild}`)
    .addFields({name: "reason:", value: `${reason}`})

    user.user.
    send(embed)
    .catch(() => message.channel.send("dm ERR!"))
    
    toBan.ban({
        reason: reason
    })
    
    message.channel.send(`${toBan} got banned lol\nreason: ${reason}`)
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: ";ban",
    accessableby: "Admins",
    aliases: []
}