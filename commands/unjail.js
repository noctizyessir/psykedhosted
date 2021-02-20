const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const ms = require('ms')
module.exports.run = async (bot, message, args) => {
    const target = message.mentions.users.first();
    if(message.member.hasPermission('MANAGE_MESSAGES')) {
        let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'jailed');

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        
        if(!target) return message.channel.send('pls provide a member to jail')


        let trigger = message.member

        let memberTarget= message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`yessir, <@${memberTarget.user.id}> is now unjailed`);
        var embed2 = new Discord.MessageEmbed()
        .setTitle('You have been unjailed')
        .addFields({name: "server:", value: `${message.guild}`, inline: true})
        .addFields({name: "by:", value: `${trigger}`, inline: true})
        .setThumbnail(trigger.user.displayAvatarURL())
        .setFooter('triggered by ' + trigger.user.tag)

        user.user.
        send(embed2)
        .catch(() => message.channel.send("dm ERR!"))

    } else {
        message.channel.send('you need permissions');
    }
}



module.exports.config = {
    name: "unjail",
    description: "unjails members",
    usage: ";unjail",
    accessableby: "Admins",
    aliases: ['freemyhomie']
}