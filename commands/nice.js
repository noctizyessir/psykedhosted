const { Message } = require("discord.js");

module.exports.run = async (bot, message , args) => {
    let deleteAmount = 1
    message.channel.send('https://media.giphy.com/media/qPcX2mzk3NmjC/giphy.gif')
    message.channel.bulkDelete(deleteAmount);
}

module.exports.config = {
    name: "nice",
    description: "sends a nice gif",
    usage: ";nice",
    accessableby: "Members",
    aliases: ['noice']
}