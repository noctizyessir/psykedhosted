module.exports.run = async (bot , message , args) => {
    let deleteAmount = 1
    message.channel.send('https://media.giphy.com/media/H5C8CevNMbpBqNqFjl/giphy.gif')
    message.channel.bulkDelete(deleteAmount);
}

module.exports.config = {
    name: "sus",
    description: "use this command when a dude is sus",
    usage: ";sus",
    accessableby: "Members",
    aliases: ['bro?']

}

