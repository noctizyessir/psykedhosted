const Discord = require('discord.js');
const ms = require('ms')

  

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const time = args[1]
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let trigger = message.member
    if(!Member) return message.channel.send('Member is not found.')
    if(!time) return message.channel.send('Please specify a time.')
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    const memberrole = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'member')
    if(!role) {
        try {
            message.channel.send('muted role not found. call the command ;setmod to create the muted role')

        } catch (error) {
            console.log(error)
        }
    };
    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
    let memberrole2 = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'member')
    if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
    await Member.roles.add(role2)
    Member.roles.remove(memberrole2)

    message.channel.send(`${Member.displayName} is now muted for ${ms(ms(time))}`)

      
    var embed = new Discord.MessageEmbed()
    .setTitle('You have been muted')
    .addFields({name: "server:", value: `${message.guild}`, inline: true })
    .addFields({name: "by:", value: `${trigger}`, inline: true})
    .addFields({name: "duration:", value: `${ms(ms(time))}`, inline:true})
    .setThumbnail(trigger.user.displayAvatarURL())
    .setFooter('triggered by ' + trigger.user.tag)


    user.user.
    send(embed)
    .catch(() => message.channel.send("dm ERR!"))

    setTimeout(async () => {
        await Member.roles.remove(role2)
        Member.roles.add(memberrole2)
        message.channel.send(`${Member.displayName} is now unmuted`)
    }, ms(time))
}






module.exports.config = {
    name: "mute",
    description: "mutes members",
    usage: ";mute",
    accessableby: "Members",
    aliases: []
}