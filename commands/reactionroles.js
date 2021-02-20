const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const channel = '804266128314073089';
    const member = message.guild.roles.cache.find(role => role.name === "member");
    const visitor = message.guild.roles.cache.find(role => role.name === "visitor");

    const memberEmoji = '🚀'
    const visitorEmoji = '🌲'

    var embed = new Discord.MessageEmbed()
    .setAuthor(`roles:`)
    .setTitle(`click the matching roles!`)
    .setDescription(`${memberEmoji} - **member** \n`+`${visitorEmoji} - **visitor**`)
    .setColor('GREY')
    
    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(memberEmoji)
    messageEmbed.react(visitorEmoji)

    bot.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === memberEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(member);
            }
            if (reaction.emoji.name === visitorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(visitor);
            }
        } else {
            return;
        }

    });
    bot.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === memberEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(member);
            }
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === visitorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(visitor);
                }
            }
        } else {
            return;
        }
    });

}

module.exports.config = {
    name: "reactionroles",
    description: "sends roles u can pick",
    usage: ";reactionroles",
    accessableby: "Admins",
    aliases: ['reactrole']
}
