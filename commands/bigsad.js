module.exports.run = async (bot, message ,args) => {
    let deleteAmount = 1
    message.channel.send('https://media.giphy.com/media/OjGUvpfVI8SBNSEbo7/giphy.gif')
    message.channel.bulkDelete(deleteAmount)
}

module.exports.config = {
    name: "bigsad",
    description: "sends a sad gif",
    usage: ";bigsad",
    accessableby: "Members",
    aliases: ['pain']
}
