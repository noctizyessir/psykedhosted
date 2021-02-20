const distube = require('distube');

module.exports.run = async (bot, message, args) => {
    bot.distube.resume(message)
    message.react('👍')
}

module.exports.config = {
    name: "resume",
    description: "resumes a paused track",
    usage: ";resume",
    accessableby: "Members",
    aliases: []
}


