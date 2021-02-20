const { Message } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let deleteAmount = 1
    message.channel.send('https://media.giphy.com/media/kCrGOt5ojlVbG/giphy.gif')
    message.channel.bulkDelete(deleteAmount)
}

module.exports.config = {
    name: "dafoe",
    description: "sends a dafoe gif",
    usage: ";dafoe",
    accessableby: "Members",
    aliases: ['willemdafoe']
}


