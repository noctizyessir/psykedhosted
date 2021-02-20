const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('errors:')
        .setDescription('```searchinsta and antiraid emojis command not working\nidk why lol hopefully ill figure it out soon```')
        .setTimestamp()
    message.channel.send(embed)


}   

module.exports.config = {
    name: "errors",
    description: "sends if there are any errors",
    usage: ";errors",
    accessableby: "Members",
    aliases: ['bugs', 'err']
}

