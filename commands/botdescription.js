const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`bot description:`)
        .setDescription('```this bot is amazing! sike its honestly trash.\nbut for those who are looking for a decent moderation,music and meme bot this bot is for u fr\nanyways this bot sucks```')
        .setFooter('foux bot pfp by @gabeweb on insta\nalso thank you to dashcruft recon blob and salvage for helping me')
        .setColor('BLACK')
    message.channel.send(embed)
}


module.exports.config = {
    name: "botdescription",
    description: "sends bots description",
    usage: ";botdescription",
    accessableby: "Members",
    aliases: ['botdesc']
}