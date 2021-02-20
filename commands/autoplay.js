const distube = require('distube')


module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1)
    let mode = bot.distube.toggleAutoplay(message);
    message.channel.send("autoplay:`" + (mode ? "On" : "Off") + "`");
    
}

module.exports.config = {
    name: "autoplay",
    description: "set autoplay to on or off",
    usage: ";autoplay",
    accessableby: "Members",
    aliases: []
}

