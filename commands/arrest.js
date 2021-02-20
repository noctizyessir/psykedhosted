const Canvas = require('canvas');
const { MessageEmbed, MessageAttachment } = require("discord.js");
const Discord = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch');
module.exports.run = async (bot, message, args) => {
    let commands = message.client.commands.array();
    if (message.mentions.users.first()) {
        let mentioned = message.mentions.users.first()
        const canvas = Canvas.createCanvas(600, 600);
        const ctx = canvas.getContext('2d');
    
        const background = await Canvas.loadImage('https://pngimg.com/uploads/prison/prison_PNG48.png');
        const avatar = await Canvas.loadImage(mentioned.displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jail.png');
    
        message.channel.send(new MessageEmbed().attachFiles(attachment).setImage('attachment://jail.png').setColor('GREY').setTitle(`get jailed, ${mentioned.username}!`));
    }
    if (!message.mentions.users.first()) {
        const canvas = Canvas.createCanvas(600, 600);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://pngimg.com/uploads/prison/prison_PNG48.png');
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jail.png');
    
        message.channel.send(new MessageEmbed().attachFiles(attachment).setImage('attachment://jail.png').setColor('GRAY').setTitle('wait did you just jail yourself?'));
    }
  };


module.exports.config = {
  name: "arrest",
  description: "puts someone in jail",
  usage: ";arrest",
  accessableby: "Members",
  aliases: []
}

