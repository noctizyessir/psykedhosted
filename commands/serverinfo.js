const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    var EMBED = new Discord.MessageEmbed()
    .setTitle("server info:")
    .addField("server name:", `${message.guild.name}`)
    .addField("server id:", `${message.guild.id}`)
    .addField("server owner:", `${message.guild.owner}`)
    .addField("members:", `${message.guild.memberCount}`)
    .addField("server roles:", `${message.guild.roles.cache.size}`)
    .addField(" channels:", `  ${message.guild.channels.cache.filter(r => r.type === "text").size} Text
      ${message.guild.channels.cache.filter(r => r.type === "voice").size} Voice`)
    .addField("server region:", `${message.guild.region}`)  
    .addField("verification Level:", `${message.guild.verificationLevel}`)
    .addField("created in: ", `${message.guild.createdAt.toLocaleString()}`)
    .addField("boosts:", `${message.guild.premiumSubscriptionCount}`)
    .setColor("#34495E")
    .setFooter(`requested by ${message.author.username}`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.channel.send(EMBED)
}


module.exports.config = {
    name: "serverinfo",
    description: "sends server info",
    usage: ";serverinfo",
    accessableby: "Members",
    aliases: []
}