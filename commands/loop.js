const Discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (bot, message) => {
   const messageArray = message.content.split(' ');
    const args = messageArray.slice(1)
    let mode = bot.distube.setRepeatMode(message, parseInt(args[0]));
    mode = mode ? mode == 2 ? "the queue" : "the song" : "off";
    var embed = new Discord.MessageEmbed()
    .setTitle(`looping:`)
    .setDescription(`**${mode}**`)
    .addFields({ name: 'how to use loop:', value: `\`loop 0 = loop disabled, loop 1 = loop the song, loop 2 = loop the queue\``, inline: true})
    .setColor('GRAY')
    message.channel.send(embed)
}

module.exports.config = {
    name: "loop",
    description: "loops tracks and queues, 0 = off 1 = the song 2 = the queue",
    usage: ";loop",
    accessableby: "Members",
    aliases: ['repeat']
}