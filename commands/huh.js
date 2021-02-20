module.exports.run = async (bot, message, args) => {
    deleteAmount = 1;
    message.channel.send('https://media.giphy.com/media/xTiTnIilwuFFFpf2Cc/giphy.gif')
    message.channel.bulkDelete(deleteAmount)
};

module.exports.config = {
    name: "huh",
    description: "sends the huh? gif",
    usage: ";huh",
    accessableby: "Members",
    aliases: ['huh?', 'bruhwhat']
}


