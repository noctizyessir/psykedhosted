module.exports.run = async (bot, message, args) => {
    message.channel.send('https://media.giphy.com/media/l0FoqKBkJ82GCYclJK/giphy.gif')

}

module.exports.config = {
	name: "travisscott",
	description: "sends travis scott gif",
	usage: ";travisscott",
	accessableby: "Members",
	aliases: ['traviscott', 'cactusjack']
}


