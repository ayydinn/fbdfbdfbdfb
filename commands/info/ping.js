const Discord = require('discord.js')

module.exports.config = {
    name: "ping",
    cooldown: '1',
    group: "info",
    description: "Ping command"
}

module.exports.run = async(client, message, args) => {
    let member = message.member;
            let embed = new Discord.MessageEmbed()
            .setColor(client.color)
            .setTitle(`PONG! :ping_pong:`)
            //.setThumbnail(member.user.displayAvatarURL())
            .addFields(
                {name: 'Latency', value: `\`${Date.now() - message.createdTimestamp}\`ms`},
                {name: 'API Latency', value: `\`${Math.round(client.ws.ping)}\`ms`},
            )
    message.channel.send({embed});
}