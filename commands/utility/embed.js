module.exports.config = {
    name: "embed",
    aliases: ['objembed', 'objemd', "obj-embed", 'obj-emd', 'objectembed', 'objectemd', 'object-emd', 'object-embed'],
    group: 'utility',
    description: "Have full customization of a embed",
    usage: 'embed <object>',
    cooldown: 5,
    example: 'embed { "title": "bot", "text": "Check out The bot", "description": "Description", "color": "0x00ff00" }'
}

module.exports.run = async(client, message, args) => {
    if (!args.length) return message.channel.send(client.main)
    try {
        const json  = JSON.parse(args.join(' '))
        const {text = ''} = json

        message.channel.send(text, {
            embed: json
        })
    } catch(e) {
        message.channel.send(`Error: ${e.message}`)
    }
}