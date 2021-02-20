const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    var embed = new Discord.MessageEmbed()
            .setAuthor(`psyked bot developers:`)
            .setDescription("```noct!z #4966```")
            .setColor('#095314')
            
        message.channel.send(embed);
}

module.exports.config = {
    name: "devs",
    description: "sends a message abt who are the devs",
    usage: ";devs",
    accessableby: "Members",
    aliases: ['developers']
}
