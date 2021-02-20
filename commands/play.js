
module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1)
    
    if (!message.member.voice.channel) return message.channel.send('u need to be in a vc to use this command.');
    
    const music = args.join(" ");

    bot.distube.play(message, music).catch(err => message.channel.send(`ERR!: ${err}`));
}

module.exports.config = {
    name: "play",
    description: "plays tracks",
    usage: ";play",
    accessableby: "Members",
    aliases: ['p']
}