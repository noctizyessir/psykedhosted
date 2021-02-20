const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const link = 'https://giphy.com/search/' + args.join(" ")

    message.channel.send(link);
}


module.exports.config = {
    name: "giphy",
    description: "searches giphy",
    usage: ";giphy",
    accessableby: "Members",
    aliases: []
}