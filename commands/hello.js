const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send ('Hello There!')
}

module.exports.config = {
    name: "hello",
    description: "Answers hello there",
    usage: ";hello",
    accessableby: "Members",
    aliases: []
}