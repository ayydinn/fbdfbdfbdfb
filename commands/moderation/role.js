const { Client, Message, MessageEmbed } = require("discord.js");

module.exports.config = {
    name: 'role',
    description: "Add/remove role from a user",
    usage: 'role <@user> <@role>',
    example: 'role @CMMhero @Member',
    group: 'moderation',
    permissions: ['MANAGE_ROLES'],
    botperms: ['MANAGE_ROLES']
}

module.exports.run = async function(client, message, args) {

    const user = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])

            const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(x => x.name.toLowerCase() === args.slice(1).join(" ") || x.name === args[1])

            if (!user) {
                return message.channel.send(client.main)
            }

            if (!role) {
                return message.channel.send(client.main)
            }

            if (message.guild.me.roles.highest.id === role.id) {
                return message.channel.send(`I cannot add or remove that role because that is my highest role`)
            }

            if (user.roles.cache.has(role.id)) {
                try {
                    user.roles.remove(role.id)
                    return message.channel.send(`Removed ${role.name} from ${user.user.tag}`)
                }
                catch (e) {
                    return message.channel.send(`There was an error: ${e}`)
                }
            } else {
                try {
                    user.roles.add(role.id)
                    return message.channel.send(`Added ${role.name} to ${user.user.tag}`)
                }
                catch (e) {
                    return message.channel.send(`There was an error: ${e}`)
                }
            }
}