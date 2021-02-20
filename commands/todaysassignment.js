const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var embed = new Discord.MessageEmbed()
            .setTitle(`command is discontinued :(`)
            .setDescription('```this command is discontinued, dm yessirksi noctiz #4966 on discord if u want this command back```') 
            .setColor('GREY')
        message.channel.send(embed).catch(err => message.channel.send(`welp error ${err}`));
}

module.exports.config = {
    name: "todaysassignment",
    description: "sends a google classroom assignment",
    usage: ";todaysassignment",
    accessableby: "Members",
    aliases: ['tugas', 'tugashrini']

}


