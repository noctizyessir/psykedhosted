const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send('u need permissions')
    }
    let userID = args[0]
    let reason = args.slice(1).join(" ")


    if(!userID) return message.channel.send('invalid user id');
    if(isNaN(userID)) return message.channel.send('user id must be a number');
    if(userID === message.author.id) return message.channel.send('u cant ban urself lol');
    if(userID === bot.user.id) return message.channel.send('bro really thought he could ban me lmaooo');

    if(!reason) reason = "no reason"

    bot.users.fetch(userID).then(async user => {
        await message.guild.members.ban(user.id, {reason: reason});
        return message.channel.send(`${user.tag} has been hardbanned for ${reason}`)
    }).catch(error => {
        return message.channel.send(`ERR!: ${error}`)
    })





}


module.exports.config = {
    name: "hackban",
    description: "bans members thats outside the server",
    usage: ";hackban",
    accessableby: "Admins",
    aliases: ['whitelist']
}
