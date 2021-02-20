module.exports.run = async (bot, message, args) => {
    let deleteAmount = 1
    message.channel.send('https://youtu.be/fdAqre8X3hI')
    message.channel.bulkDelete(deleteAmount)

}

module.exports.config = {
    name: "greatjacket",
    description: "sends the great jacket video",
    usage: ";greatjacket",
    accessableby: "Members",
    aliases: ['nicejacket']
}




