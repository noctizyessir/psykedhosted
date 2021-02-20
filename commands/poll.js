const Discord = require('discord.js')

module.exports.run = async (bot, message) => {
    if(message.author.bot || message.channel.type === "dm") return;
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle('poll:')
    .setDescription(pollDescription)
    .setColor('GRAY')
    let messageEmbed = await pollChannel.send(embedPoll);
    await messageEmbed.react('👍')
    await messageEmbed.react('👎')
}

module.exports.config = {
	name: "poll",
	description: "sends poll",
	usage: ";poll",
	accessableby: "Members",
	aliases: []
}