const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("u need permissions bro").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`ERR!: ${err}`));
}

module.exports.config = {
    name: "clear",
    description: "clears message",
    usage: ";clear",
    accessableby: "Members",
    aliases: ['c', 'purge']
};