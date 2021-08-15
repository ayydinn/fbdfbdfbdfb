const { Client, Message, MessageEmbed } = require("discord.js")

module.exports.config = {
    name: "report",
    cooldown: "10",
    description: "Report bugs/problems",
    usage: "report <message>",
    example: 'report >ban command bug',
    group: 'info',
}

module.exports.run = async (client, message, args) => {
    const guildID = '691992874686087278'
    const channelID = '832495192517902407'

    const logChannel = message.client.channels.cache.get(channelID);
    //const channel = message.guild.channels.cache.get(channelID);
    if (!args.join(' ')) return message.channel.send(client.main)
    
    const sayMessage = args.join(" "); 
        // message.delete().catch(err => console.log(err)); 
        let embed = new MessageEmbed()
        .setColor('RED')
        .setTitle(`🚨 Report: `)
        .addField('User', message.member, true)
        .addField('Server', message.guild.name, true)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setDescription(`${sayMessage}`);
    message.reply(`Succesfully reported!`)

    //Client.guilds.get(guildID).channels.get(channelID).send(embed)
    logChannel.send(embed)
}