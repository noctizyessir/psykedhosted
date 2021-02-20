const Discord = require('discord.js');

const validateFlag = f => f === 'true' || f === 'false' || f === 'null';
const IGNORED = new Set([

]);

module.exports.run = async(bot, message, args) => {
  const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
  if (args[0] === 'on') {
      channels.forEach(channel => {
          channel.updateOverwrite(message.guild.roles.everyone, {
              SEND_MESSAGES: false
          }).then(() => {
              channel.setName(channel.name += `🔒`)
          })
      })
      return message.channel.send('locked all channels');
  } else if (args[0] === 'off') {
      channels.forEach(channel => {
          channel.updateOverwrite(message.guild.roles.everyone, {
              SEND_MESSAGES: true
          }).then(() => {
                  channel.setName(channel.name.replace('🔒', ''))
              }
          )
      })
      return message.channel.send('unlocked all channels')
  }

  }



module.exports.config = {
    name: "antiraid",
    description: "locks channels (;antiraid (roleid) true|false)",
    usage: ";antiraid",
    accessableby: "Admins",
    aliases: ['lock', 'lockdown']
}