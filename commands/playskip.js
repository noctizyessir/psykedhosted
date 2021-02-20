const distube = require('distube')

module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1)
    
    
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await bot.distube.getQueue(message);
    if(queue) {
        bot.distube.playSkip(message, args.join(" "))

        message.react('👍')
    };
}

module.exports.config = {
    name: "playskip",
    description: "skips playlists",
    usage: "playskip",
    accessableby: "Members",
    aliases: ['skiplist']
}

