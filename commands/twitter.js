module.exports.run = async (bot, message, args) => {
    message.channel.send('https://twitter.com/nxctiz')

}

module.exports.config = {
    name: "twitter",
    description: "noctiz's twitter",
    usage: ";twitter",
    accessableby: "Members",
    aliases: ['twit']
}


