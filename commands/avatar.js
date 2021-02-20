const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    
   const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setColor('GRAY')
    .setImage(member.user.displayAvatarURL({size: 2048}))
    message.channel.send(userEmbed)
}

module.exports.config = {
    name: "avatar",
    description: "sends  member's avatar",
    usage: ";avatar",
    accessableby: "Members",
    aliases: ['av']
}