
const prefixModel = require("../models/prefix")

module.exports.run = async (bot, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });

    if (!args[0]) return message.channel.send('you must provide a **new prefix**!');

    if (args[0].length > 5) return message.channel.send('ur new prefix must be under \`5\` characters!')

    if (data) {
        await prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}

module.exports.config = {
    name: "setprefix",
    description: "change the prefix with this command",
    usage: ";setprefix",
    accessableby: "Admins",
    aliases: []
}