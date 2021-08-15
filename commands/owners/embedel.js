module.exports.config = {
    name: "embedel",
    group: 'owners',
    ownerOnly: true,
    description: "Have full customization of a embed",
    usage: 'embed <object>',
    cooldown: 5,
    example: 'embed { "title": "bot", "text": "Check out The bot", "description": "Description", "color": "0x00ff00" }'
}

module.exports.run = async(client, message, args) => {
    if (!args.length) return message.channel.send(client.main)
    message.delete();
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