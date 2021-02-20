const { Message } = require('discord.js')

module.exports.run = async(bot, message, args) => {

        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission.')
        //next we define some variables
        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.channel.send('No member specified') //when no member is pinged
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send('No role specified') //when no role is specified or pinged
        //now the code!
        await target.roles.remove(role) // removeing the role to the user
        message.channel.send(`yessir, ${target.user.username} roles has been removed`) //this is optional and editable
}


module.exports.config = {
    name: "removerole",
    description: "removes roles",
    usage: ";removerole",
    accessableby: "Admins",
    aliases: []
}


