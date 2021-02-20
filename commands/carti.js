module.exports.run = async (bot, message, args) => {
    message.channel.send('https://media.giphy.com/media/kaZtgEF9U4rRNRRSua/giphy.gif')

}

module.exports.config = {
	name: "carti",
	description: "sends carti gif",
	usage: ";carti",
	accessableby: "Members",
	aliases: []
}