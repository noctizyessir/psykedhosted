const { MessageEmbed } = require("discord.js")
const { stripIndents } = require("common-tags");
const insta = require("user-instagram");
// const { colors } = require('../../config colors/colors')
module.exports.run = async (bot, message, args) => {
    let name = args[0];

    if(!name) return message.channel.send('enter an account');

    await insta(name).then(res => {
        let embed = new MessageEmbed()
        .setColor('GRAY')
        .setAuthor(`@${res.username}`)
        .setURL(res.link)
        .setThumbnail(res.profilePicHD)
        .addField('Username:', res.username, true)
        .addField('Full Name:', res.fullName, true)
        .addField('Bio:', `${res.biography.length == 0 ? 'None' : res.biography}`, true)
        .addField('Followers:', res.subscribersCount, true)
        .addField('Following:', res.subscribtions, true)
        .addField('Private:', `${res.isPrivate ? 'yes' : 'no'}`, true)
        .setFooter(`Instagram User ID: ${res.id}`)
         
        message.channel.send(embed);
    }).catch(err => {
      console.log(err);
      return message.reply("Are you sure that account exists?");
    });
    }

module.exports.config = {
    name: "searchinsta",
    description: "search someones insta",
    usage: ";searchinsta",
    accessableby: "Members",
    aliases: ['si']
}