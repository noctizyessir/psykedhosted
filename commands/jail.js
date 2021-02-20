const Discord = require('discord.js')
const ms = require('ms')
  

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('you dont have permissions')
    if(message.member.hasPermission('MANAGE_MESSAGES')) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let trigger = message.member

        if(!member) return message.reply('pls provide a member to jail')

        let mainrole = message.guild.roles.cache.find(role => role.name === "member");
        let role = message.guild.roles.cache.find(role => role.name === "jailed");

        if (!role) return message.reply("couldn't find the 'jailed' role. pls call the command 'setmod' first")

        let time = args[2];
        if (!time) {
            return message.reply("pls specify a time");
        }

        const reason = args[1] || "no reason";

        member.roles.remove(mainrole.id)
        member.roles.add(role.id);

        message.channel.send(`yessir, ${member.user} is now jailed for ${ms(ms(time))}`)

        var embed3 = new Discord.MessageEmbed()
        .setTitle('Jail Log')
        .setDescription(`${member.user} is jailed by ${trigger}`)
        .addFields({name: "reason:", value: `${reason}`})
        .addFields({name: "duration:", value: `\`\`\`${ms(ms(time))}\`\`\``})
        .setTimestamp()

        const jailchannel = member.guild.channels.cache.find(channel => channel.name === 'jail')
        const jailedChannel = member.guild.channels.cache.find(channel => channel.name === 'jail-log')
        jailedChannel.send(embed3)
        
        var embed = new Discord.MessageEmbed()
        .setTitle('You have been jailed')
        .addFields({name: "server:", value: `${message.guild}`, inline: true })
        .addFields({name: "reason:", value: `${reason}`, inline: true})
        .addFields({name: "by:", value: `${trigger}`, inline: true})
        .addFields({name: "duration:", value: `${ms(ms(time))}`, inline:true})
        .setThumbnail(trigger.user.displayAvatarURL())
        .setFooter('triggered by ' + trigger.user.tag)

        user.user.
        send(embed)
        .catch(() => message.channel.send("dm ERR!"))

        setTimeout( function () {
            member.roles.add(mainrole.id)
            member.roles.remove(role.id);
            message.channel.send(`${member.user} is now unjailed.`)
        }, ms(time));

    } else {
        return message.channel.send('create a channel named jail and jail-log first')
    }
}



module.exports.config = {
    name: "jail",
    description: "puts members in jail. first call the command ;setmod, this will create the jailed role and the mute role,\nafter that create a channel named jail and jail-log and make it private for the jailed role and the mods\nmake the jailed role can send messages \n once youre done u should be good to go",
    usage: ";jail",
    accessableby: "Admins",
    aliases: []
}