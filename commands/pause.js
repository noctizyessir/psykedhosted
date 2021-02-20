const { Message } = require('discord.js');
const distube = require('distube');

module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1)
    bot.distube.pause(message)
    message.react('👍')

}
module.exports.config = {
    name: "pause",
    description: "pauses tracks",
    usage: ";pause",
    accessableby: "Members",
    aliases: []
}

