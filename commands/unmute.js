const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const ms = require('ms')
module.exports.run = async (bot, message, args) => {
    const target = message.mentions.users.first();
    if(target){
        let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let trigger = message.member

        let memberTarget= message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        
        var embed2 = new Discord.MessageEmbed()
        .setTitle('You have been muted')
        .addFields({name: "server:", value: `${message.guild}`, inline: true })
        .addFields({name: "by:", value: `${trigger}`, inline: true})
        .addFields({name: "duration:", value: `${ms(ms(time))}`, inline:true})
        .setThumbnail(trigger.user.displayAvatarURL())
        .setFooter('triggered by ' + trigger.user.tag)
        
        user.user.
        send(embed2)
        .catch(() => message.channel.send("dm ERR!"))

    } else {
        message.channel.send('cant find that member');
    }
}



module.exports.config = {
    name: "unmute",
    description: "mutes members",
    usage: ";unmute",
    accessableby: "Members",
    aliases: []
}