module.exports.run = async (bot, message, args) => {
        const target = message.mentions.users.first();
        
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("the dude got kicked lol").catch(err => message.channel.send(`ERR!: ${err}`));
    }
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: ";kick",
    accessableby: "Admins",
    aliases: []
}

