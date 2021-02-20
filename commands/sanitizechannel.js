const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
      message.channel
        .send({embed: {description: "```Starting sanatization process```:mask:", color: "RANDOM", timestamp: new Date()}})
        .then((message) => {
          setTimeout(() => {
            message.edit({embed: {description: "```Disinfecting the channel```", color: "RANDOM", timestamp: new Date()}});
          }, 3000);
          setTimeout(() => {
            message.edit({embed: {description: "```Cleaning pfps```", color: "RANDOM", timestamp: new Date()}});
          }, 6000);
          setTimeout(() => {
            message.edit({embed: {description: "```Sanatizing words```", color: "RANDOM", timestamp: new Date()}});
          }, 9000);
          setTimeout(() => {
            message.edit({embed: {description: "```Killing all germs```", color: "RANDOM", timestamp: new Date()}});
          }, 12000);
          setTimeout(() => {
            message.edit({embed: {description: "```This channel is sanatized! \nHave a nice day```", color: "RANDOM", timestamp: new Date()}});
          }, 15000);
        });
}
  


module.exports.config = {
    name: "sanitizechannel",
    description: "well technically sanitizes the channel",
    usage: ";sanitizeserver",
    accessableby: "Members",
    aliases: []
}
