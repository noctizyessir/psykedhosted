const { Message } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let deleteAmount = 1
    message.channel.send('https://media.giphy.com/media/Diym3aZO1dHzO/giphy.gif')
    message.channel.bulkDelete(deleteAmount);
}

module.exports.config = {
    name: "clap",
    description: "rei clapping i guess",
    usage: ";clap",
    accessableby: "Members",
    aliases: ['clappinghands']
}

