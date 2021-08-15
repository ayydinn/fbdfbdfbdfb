const { Client, Message, MessageAttachment } = require("discord.js");

module.exports.config = {
    name: "cls",
    aliases: ['clearall'],
    description: "Clear all the messages in a channel",
    usage: 'cls',
    ownerOnly: true,
    group: 'moderation',
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
    message.channel.bulkDelete(99)
}