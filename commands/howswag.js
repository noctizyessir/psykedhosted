const Discord = require('discord.js')
const random = [Math.floor(Math.random() * 100)];




module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first() || message.member;
    var embed = new Discord.MessageEmbed()
    .setTitle('How Swag')
    .setDescription(`${member.user} is ${random}% swaggy`)
    message.channel.send(embed)
}



module.exports.config = {
    name: "howswag",
    description: "shows how swaggy (this a joke dont take it seriously)",
    usage: ";howswag",
    accessableby: "Members",
    aliases: ['howswaggy']

}