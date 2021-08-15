const { Client, Message, MessageEmbed } = require("discord.js")

module.exports.config = {
    name: "suggest",
    cooldown: "10",
    description: "Suggest a new command/feature",
    usage: "suggest <message>",
    example: 'suggest new rank command',
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
        .setColor('BLUE')
        .setTitle(`💡 Suggestion: `)
        .addField('User', message.member, true)
        .addField('Server', message.guild.name, true)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setDescription(`${sayMessage}`);
    message.reply(`Succesfully suggested!`)

    //Client.guilds.get(guildID).channels.get(channelID).send(embed)
    logChannel.send(embed).then(message => {
                message.react('✅');
                message.react('❎');
            });
}