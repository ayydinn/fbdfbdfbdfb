const { MessageEmbed, Client, Message } = require('discord.js');
const { readdirSync } = require("fs");

module.exports.config = {
    name: "allcmds",
    group: "info",
    usage: 'allcmds',
    guarded: true,
    argsCount: 0,
    botperms: ["EMBED_LINKS"],
    description: "List of all commands"
}

module.exports.run = async (client, message, args) => {

        let cmds = [];
        client.commands.forEach((command) => {
            cmds.push(`\`${command.config.name}\``);
        })
        const cmdsEmbed = new MessageEmbed()
        .setTitle(`List of all ${client.botName} Commands`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        //.setThumbnail(client.user.displayAvatarURL())
        .setColor(client.color)
        .setDescription(`${cmds.join(', ')}`)

        message.channel.send(cmdsEmbed);
}