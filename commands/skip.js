  module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message)

        message.react('👍')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    description: "skips tracks",
    usage: ";skip",
    accessableby: "Members",
    aliases: []
}