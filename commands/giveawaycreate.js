const Discord = require('discord.js');
const giveaway = require('discord-giveaway')



module.exports.run = async (bot, message, args) => {
    const channel = message.mentions.channels.first();
    await bot.giveaways.startGiveaway({
        prize: 'Nothing',
        channelId: channel.id,
        guildId: message.guild.id,
        duration: 30000, // 30 Seconds
        winners: 1, // 1 winner
        hostedBy: message.author.id
    });
   

}

module.exports.config = {
    name: "giveawaycreate",
    description: "creates giveaways",
    usage: ";giveawaycreate",
    accessableby: "Admins",
    aliases: ['gcreate']
}