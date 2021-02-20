const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);
    
    let toBan = await bot.users.fetch(args[0])

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

    const reason = args[1] || "There was no reason!";

    message.guild.members.unban(toBan, reason)

    message.channel.send(`${toBan} unbanned.`)
}

module.exports.config = {
    name: "unban",
    description: "unbans a dude",
    usage: ";unban",
    accessableby: "Admins",
    aliases: ['bansike']
}

