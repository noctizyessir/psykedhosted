module.exports.run = async (bot, message, args) => {
    message.channel.send('https://media.giphy.com/media/JV2xzBdZg0Bvdek6Qf/giphy.gif')
}


module.exports.config = {
	name: "uzi",
	description: "sends uzi gif",
	usage: ";uzi",
	accessableby: "Members",
	aliases: []
}