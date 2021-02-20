const Discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (bot, message, args) => {
        let queue = bot.distube.getQueue(message);
        var embed = new Discord.MessageEmbed()
    .setTitle('queue:')
    .setDescription(queue.songs.map((song, id) =>
    `\`\`\`js
${id+1}. ${song.name}\`\`\``
).join(" "))
    .setColor('#1A5276')
    message.channel.send(embed);
}


module.exports.config = {
    name: "queue",
    description: "sends queue",
    usage: ";queue",
    accessableby: "Members",
    aliases: []
}


 