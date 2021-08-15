const { MessageEmbed, Client, Message } = require('discord.js')
const ms = require('ms')

module.exports.config = {
    name: "information",
	aliases: ['info', 'botinfo', 'i'],
    group: 'info',
    description: 'Information about the bot',
}

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @param {*} args 
 */

module.exports.run = async(client, message, args) => {

    let totalMembers = 0;

    for (const guild of client.guilds.cache) {
        totalMembers += (await guild[1].members.fetch()).size;
    }

    const infoEmbed = new MessageEmbed()
    .setColor(client.color)
    //.setURL("https://discord.com/api/oauth2/authorize?client_id=782204406917365790&permissions=8&scope=bot")
    .setTitle(`**${client.botName}**`)
    .setDescription(`More info about [${client.user.username}](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    // .addField("🔹Version", "1.0.7", true)
    // .addField('📚Library', "**Discord.JS**    ", true)
    .addField('👥 Servers & Users', `Total Servers: \`${client.guilds.cache.size}\` \n Total Users: \`${totalMembers}\``, true)
    .addField("❓ Prefixes", ` Default :\`${require('../../config/bot.json').prefix}\` \n Server prefix: \`${client.prefix}\``, true)
    .addField('⏳ Uptime', `\`${ms(client.uptime)}\``, true)
.addField('Developer', '<@502406420453654529> [Team Rainbow](https://discord.gg/xtessK2DPA)', false)
    .setThumbnail(client.mainURL)
    .setTimestamp()
    // .setFooter('Uptime: 24/7');
   

    message.channel.send(infoEmbed);

}