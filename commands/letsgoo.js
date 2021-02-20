module.exports.run = async (bot, message, args) => {
    let deleteAmount = 1
    message.channel.send('https://tenor.com/view/lets-go-lets-goo-lest-gooooooooooooooooo-gif-19416648')
    message.channel.bulkDelete(deleteAmount);
}

module.exports.config = {
    name: "letsgoo",
    description: "sends a lets goo gif",
    usage: ";letsgoo",
    accessableby: "Members",
    aliases: ['letsfuckinggoo']
}

