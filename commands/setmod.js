const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'jailed')
    const role2 = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    
    if(!role) {
        try {
            message.channel.send('jailed role not found, attempting to create jailed role...')

            let jailedrole = await message.guild.roles.create({
                data : {
                    name : 'jailed',
                    permissions: []
                }
            });
            message.guild.channels.cache.filter(c => c.type === 'voice').forEach(async (channel, id) => {
                await channel.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: false,
                    CONNECT: false
                })
            });
            message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                await channel.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            });
           const jailedover = message.guild.channels.cache.find(channel => channel.name === 'jail')
                    jailedover.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                })
            const jailedover2 = message.guild.channels.cache.find(channel => channel.name === 'jail-log')
                    jailedover2.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: true,
                })
            message.channel.send('jailed role has sucessfully been created.')
        } catch (error) {
            console.log(error)
        }
    } else if (!role2) {
        try {
        message.channel.send('muted role is not found, attempting to create muted role...')
        let muterole = await message.guild.roles.create({
            data : {
                name : 'muted',
                permissions: []
            }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            await channel.createOverwrite(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
        });
        message.channel.send('muted role has sucessfully been created.')
    } catch (error) {
        console.log(error)
    }
    } else if (!role && !role2) {
        try {
            message.channel.send('jailed role and muted role not found, attempting to create jailed and muted role...')

            let jailedrole = await message.guild.roles.create({
                data : {
                    name : 'jailed',
                    permissions: []
                }
            });
            let muterole = await message.guild.roles.create({
                data : {
                    name : 'muted',
                    permissions: []
                }
            });
            message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                await channel.createOverwrite(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            });
            message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                await channel.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            });
            message.guild.channels.cache.filter(c => c.type === 'voice').forEach(async (channel, id) => {
                await channel.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: false,
                    CONNECT: false
                })
            });
            const jailedover3 = message.guild.channels.cache.find(channel => channel.name === 'jail')
                 jailedover3.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                })
            const jailedover4 = message.guild.channels.cache.find(channel => channel.name === 'jail-log')
                jailedover4.createOverwrite(jailedrole, {
                    VIEW_CHANNEL: true,
                })
            message.channel.send('jailed role and muted role has sucessfully been created.')
        } catch (error) {
            console.log(error)
        }
    } else if (role && role2){
        message.channel.send('you already have the muted role and the jailed role')
    } else {
        message.channel.send('create a channel named jail and jail-log first')
    }
}



module.exports.config = {
    name: "setmod",
    description: "creates jailed and muted role",
    usage: ";setmod",
    accessableby: "Members",
    aliases: ['setme']
}