const { WebhookClient, MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
    .setTitle("Embed").setColor('GRAY').setTimestamp().setDescription(args.join(" "))

    message.channel.send(embed)
};


module.exports.config = {
    name: "customembed",
    description: "create custom embeds with this cmd",
    usage: ";customemebed",
    accessableby: "Admins",
    aliases: ['webhook', 'ce']
}

