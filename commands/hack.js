const Discord = require('discord.js')
const ip = ["127.0.0.1", "293.43.67.0", "567.78.90.5"]
const random = ip[Math.floor(Math.random() * 3)];
const lastSearch = ['how to eat poop', 'is farting 100 times per day normal?', 'free vbucks', 'free robux']
const random2 = lastSearch[Math.floor(Math.random() * 4)];
const email = ['Email: fart@gmail.com\nPassword: artrhymeswithfart', 'Email: btsfan@gmail.com\nPassword: kimjongun', 'Email: shrek@fartmail.com\nPassword: donkey']
const random3 = email[Math.floor(Math.random() * 3)];

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first() || message.member;
      message.channel
        .send({embed: {description: `\`\`\`Hacking ${member.user.tag}\`\`\``, color: "RANDOM", timestamp: new Date()}})
        .then((message) => {
          setTimeout(() => {
            message.edit({embed: {description: "```getting ip address....```", color: "RANDOM", timestamp: new Date()}});
          }, 3000);
          setTimeout(() => {
            message.edit({embed: {description: `\`\`\`ip address: ${random}\`\`\``, color: "RANDOM", timestamp: new Date()}});
          }, 6000);
          setTimeout(() => {
            message.edit({embed: {description: "```Hacking browser...```", color: "RANDOM", timestamp: new Date()}});
          }, 9000);
          setTimeout(() => {
            message.edit({embed: {description: `\`\`\`last browser search: ${random2}\`\`\``, color: "RANDOM", timestamp: new Date()}});
          }, 12000);
          setTimeout(() => {
            message.edit({embed: {description: "```Hacking email...```", color: "RANDOM", timestamp: new Date()}});
          }, 15000);
          setTimeout(() => {
            message.edit({embed: {description: `\`\`\`${random3}\`\`\``, color: "RANDOM", timestamp: new Date()}});
          }, 18000);
          setTimeout(() => {
            message.edit({embed: {description: "```reporting the account to discord...```", color: "RANDOM", timestamp: new Date()}});
          }, 21000);
          setTimeout(() => {
            message.edit({embed: {description: "```sending the datas to the FBI...```", color: "RANDOM", timestamp: new Date()}});
          }, 24000);
          setTimeout(() => {
            message.edit({embed: {description: "```injecting malware...```", color: "RANDOM", timestamp: new Date()}});
          }, 27000);
          setTimeout(() => {
            message.edit({embed: {description: "```hack is complete!```", color: "RANDOM", timestamp: new Date()}});
          }, 30000);
        });
}
  


module.exports.config = {
    name: "hack",
    description: "hacks someone well not really but u know",
    usage: ";hack",
    accessableby: "Members",
    aliases: []
}