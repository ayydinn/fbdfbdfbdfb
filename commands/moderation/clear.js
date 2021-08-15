const { Client, Message, MessageAttachment } = require("discord.js");

module.exports.config = {
    name: "clear",
    aliases: ['c', 'clean'],
    description: "Clear messages in a channel",
    usage: 'clear [amount]',
    group: 'moderation',
    example: 'clear 50',
    permissions: ['MANAGE_MESSAGES']
}

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @param {*} args 
 * @returns 
 */

module.exports.run = async(client, message, args) => {
    let amount = Number(args[0]);

    if (!amount) return message.channel.send(client.main);

    if (isNaN(amount)) return message.channel.send(client.main)

    if (amount >= 100) amount = 98
    let a = amount + 1
    message.channel.bulkDelete(a)
}