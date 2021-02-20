const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("moment")
}

module.exports.config = {
    name: "bruh",
    description: "says momento",
    usage: ";bruh",
    accessableby: "Members",
    aliases: []
}

