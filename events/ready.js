const { Client, Message, ClientUser, MessageReaction, MessageEmbed, MessageAttachment } = require('discord.js')
/**
 * 
 * @param {Client} client 
 */
module.exports = async(client, message, args) => {
    
    client.guilds.cache.forEach((guild) => {
	guild.channels.cache.map((channel) => {
        const channelID = ''
        // const channel = client.guild.channels.cache.get(channelID);
        if (channel.id === channelID) {
            const startEmbed = new MessageEmbed()
                .setTitle("Bot is online ✅")
                .setDescription(`Bot has restarted.`)
                .setColor('GREEN')
                .setTimestamp()
            return channel.send(startEmbed)
            }
        })
    });

    console.log(`${client.user.tag} Has logged in`)
    async function ll() {
        let totalMembers = 0;

        for (const guild of client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size;
        }

        var status = require('../config/settings.json').status;

        if (require('../config/settings.json').loop_status_types == true) {
            var types = ['COMPETING', 'WATCHING', "LISTENING", "PLAYING"]     
        } else {
            require('../config/settings.json').loop_status[Math.floor(Math.random() *  require('../config/settings.json').loop_status.length)]
        }
        let randomType = types[Math.floor(Math.random() * types.length)]
        if (randomType === 'COMPETING')
            status = `${client.guilds.cache.size} servers` 

        if (randomType === 'WATCHING') {
            status = `bit.ly/h320bot`
        }
        if (randomType === 'LISTENING') {
            //status = `@${client.botName} help`
            status = `${totalMembers} members`
        }

    client.user.setPresence({activity: {type: randomType, /*url: "http://www.youtube.com/CMMhero",*/ name: status}, status:  'idle'});
}
setInterval(() => {
    ll()
}, 3000)

    client.on('message', message => {
        if(message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
                const ms = require('ms')
                const infoEmbed = new MessageEmbed()
                    .setColor(client.color)
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
                    .setTitle(`**${client.botName}**`)
                    .setDescription(`To get started type \`>help\` or \`>commands\` to see all the commands\nYou can invite me to other servers by [clicking here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\n\nMore info about [${client.user.username}](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
                    .addField('👥 Servers', `Total Servers: \`${client.guilds.cache.size}\``, true)
                    .addField("❓ Prefixes", ` Default :\`${require('../config/bot.json').prefix}\``, true)
                    .addField('⏳ Uptime', `\`${ms(client.uptime)}\``, true)
                    .setThumbnail(client.mainURL)
                    .setTimestamp() 
                message.channel.send(infoEmbed);
        }
    })

    client.on('message', message => {
        if(message.content === 'ok' || message.content === 'nice') message.react('👌')
        if(message.content === 'bye') message.react('👋')
        if(message.content === 'gas') message.react('🤙')
        if(message.content === 'skip') message.react('⛔')
        if(message.content === 'lol') message.react('😂')

        var stickers = ["aku salah", "apa kabar", "bodo amat", "fine", "ga gitu", "haha", "hai kamu", "hehehe", "hmm", "jahat", "lah",
                         "maap", "nani", "nope", "oke", "omg", "sans", "sial", "sip", "wkwk", "yoi", "peace", "hehe", "zzz",
                         "triggered", "cape", "kenalan yuk", "jangan malu malu", "woi", "ntar", "hah?", "ok gan", "masa sih",
                         "wassup", "napa", "biasa aja", "lahh", "yaudah", "gimana nih", "ea", "bentar", "so sad", "umm", "gitu doang",
                         "yoii", "aduhh", "yahaha", "hahah", "apalu", "wkwkwk", "hah", "lopyu", "santuy", "mantap", "hhe", "ulala",
                         "yess", "ok.", "siap", "maaf", "iya.", "iri bilang bos", "astaga", "kenapa?", "yakin?", "terciduk kau", "eh?",
                         "aduh"]
        var stickersID = ["340350493", "341179644", "104171025", "340322127", "340350489", "102876678", "340350492", "340350488", "102876678",
                          "104171023", "340350491", "102876680", "104171026", "102876685", "340350486", "104171027", "102876683", "341179638", 
                          "341179639", "340350487", "340350490", "102876681", "102876682", "102876684", "104171022", "104171024", "104171028",
                          "104171029", "340322126", "340631559", "340631560", "340631561", "340631562", "340631563", "340631564", "340631565",
                          "340322128", "340322129", "340322130", "340322131", "340322132", "340322133", "341179640", "341179641", "341179642",
                          "341179643", "341179645", "340339902", "340127879", "340127880", "340127882", "340127884", "340127885", "340339526",
                          "340339527", "340339528", "340339529", "340339530", "340339531", "340339532", "340339533", "340339903", "340339904",
                          "340339906", "340339907", "340339908", "340339909", "340127878"]
                          
        if(message.content === `${require('../config/bot.json').prefix}stickers`) {
            let stickerNames = [];
            stickers.forEach((stickerName) => {
                    stickerNames.push(`\`${stickerName}\``);
            })
            const stickersEmbed = new MessageEmbed()
                .setTitle(`Stickers (chat)`)
                .setColor(client.color)
                .setDescription(`${stickerNames.join(`, `)}`)
            message.channel.send(stickersEmbed)
        }

        for(index=0; index<stickers.length; index++) {
            if(message.content === `${stickers[index]}`)
                message.channel.send(' ', {
                files: [`https://stickershop.line-scdn.net/stickershop/v1/sticker/${stickersID[index]}/android/sticker.png`]
            })
        }
        
    })
}

module.exports.config = {
    type: 'ready'
}