const {MessageEmbed, Client, Message} = require('discord.js')

module.exports.config = {
    name: "wc",
    group: 'owners',
    usage: `wc`,
    ownerOnly: true,
    example: `wc`,
    description: "Bot welcome message",
}

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @param {*} args 
 */

module.exports.run = async(client, message, args) => {
    let embed = new MessageEmbed()
        .setColor(client.color)
        .setTitle(`Thank you for adding ${client.user.username}, a bot by Tejas 😊`)
        .setDescription(`To get started type \`${require('../../config/bot.json').prefix}help\` or \`${require('../../config/bot.json').prefix}commands\` to see all the commands\nYou can invite me to other servers by [clicking here.](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) or by typing \`>inv\``)
        .setFooter(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
    message.delete().then(message.channel.send(embed))
}


// .setTitle(`${message.guild.name}`)
// .addField("**Owner:**", `<@${owner}>` , true)
// .addField("Region", message.guild.region, true)
// .addField("Text Channels", message.guild.channels.cache.size, true)
// .addField("Members", message.guild.memberCount - botCount, true)
// .addField('Bots', botCount, true)
// .addField("**Role list**", message.guild.roles.cache.size, true)//a70f3e9169546b2c67d301aaeef38.gif
// .addField("**Catogory size**", cato, true)
// .addField('**Created on**', message.guild.createdAt.toUTCString(), true)
// .setThumbnail(message.guild.iconURL())
// .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
// message.channel.send(embed)