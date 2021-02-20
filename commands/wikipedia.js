const Discord = require('discord.js');
const { arg } = require('mathjs');


module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        message.channel.send('invalid url')
    }
    const link = 'https://en.wikipedia.org/wiki/' + args.join("_")
    if(args[0]){
    message.channel.send(link)
    }
};

module.exports.config = {
    name: "wikipedia",
    description: "searches wikipedia",
    usage: ";wikipedia",
    accessableby: "Members",
    aliases: ['wp']
}
