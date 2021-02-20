const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    var embed = new Discord.MessageEmbed()
            .setAuthor(`slavAword instas:`)
            .setDescription("noctiz's insta: https://www.instagram.com/nxctiz/")
            .setColor('#34495E')
            
        message.channel.send(embed);
}

module.exports.config = {
    name: "insta",
    description: "sends slav a word instas",
    usage: ";insta",
    accessableby: "Members",
    aliases: ['instagram']
}

