module.exports.run = async (bot, message, args) => {
    let deleteAmount = 1
    message.channel.send('https://media.giphy.com/media/HPvfnOuz1tOgg/giphy.gif')
    message.channel.bulkDelete(deleteAmount);
}

module.exports.config = {
    name: "laugh",
    description: "sends a laugh gif",
    usage: ";laugh",
    accessableby: "Members",
    aliases: ['nicholascagelaugh']
}

