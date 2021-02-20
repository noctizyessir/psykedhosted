const { MessageEmbed } = require('discord.js');


module.exports.run = async (bot, message, args) => {
    const snipes = bot.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`invalid snipe`);
    const Embed = new MessageEmbed()
      .setAuthor(
        msg.author.username,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`sniped message by ${msg.author.tag}  Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  }


module.exports.config = {
    name: "snipe",
    description: "sends deleted commands",
    usage: ";snipe",
    accessableby: "Admins",
    aliases: []
}