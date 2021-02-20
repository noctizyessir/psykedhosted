module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('u need to be in a vc to use this command.');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.stop(message)

        message.channel.send('yessir')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "disconnect",
    description: "disconnects the bot",
    usage: ";disconnect",
    accessableby: "Members",
    aliases: ['dis', 'dc']
}

