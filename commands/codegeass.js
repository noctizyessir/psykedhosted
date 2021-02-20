const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    const gifs = ["https://media.giphy.com/media/3PxSmPCeQsVGUl2Q35/giphy.gif", "https://media.giphy.com/media/f9RYps59z4TPhanIuX/giphy.gif", "https://media.giphy.com/media/AhOW61Pxt49kQ/giphy.gif", "https://media.giphy.com/media/13pHvqbNfjaZyg/giphy.gif", "https://media.giphy.com/media/gkRApEeHSBlOU/giphy.gif", "https://media.giphy.com/media/8Bkq3DCuL5u7ud1AIV/giphy.gif", "https://media.giphy.com/media/Z3Dz0f7pNHns4/giphy.gif"]
    const random = gifs[Math.floor(Math.random() * 7)];

    message.channel.send(random).catch(err => message.reply(`ERR!: ${err}`));

}

module.exports.config = {
    name: "codegeass",
    description: "sends code geass gifs",
    usage: ";codegeass",
    accessableby: "Members",
    aliases: []
}