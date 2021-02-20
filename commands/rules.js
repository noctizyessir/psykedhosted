const Discord = require('discord.js')
const paginationEmbed = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {
    var embed = new Discord.MessageEmbed()
            .setTitle(`RULES`)
            .setDescription('yall rocking with rules!?')
            .addFields({ name: 'No Insulting', value: '```do not offend anyone in this server```', inline: true})
            .addFields({ name: 'No Doxxing', value: '```do not dox or hack anyone in this server```', inline: true})
            .setFooter('TLDR use common sense')
            .setColor('GREY')
    var embed2 = new Discord.MessageEmbed()
        .setTitle(`RULES`)
        .setDescription(`yall rocking with rules!?`)
        .addFields({ name: 'No Weird Stuff', value: '```dont send any nsfw/disturbing content ```', inline: true})
        .addFields({ name: 'No Breaking Discord\'s TOS', value: '```nothing that violates discord’s terms of service (https://discordapp.com/tos) is allowed.```', inline: true})
        .setFooter('TLDR use common sense')
        .setColor('GRAY')
    const pages = [
        embed,
        embed2
    ]
    
    const emojiList = [
        "⏪",
        "⏩"
    ]
    const timeout = 2147483647
    paginationEmbed(message, pages, emojiList, timeout);
}


module.exports.config = {
    name: "rules",
    description: "sends rules",
    usage: ";rules",
    accessableby: "Members",
    aliases: []
}
