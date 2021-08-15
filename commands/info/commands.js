const { MessageEmbed, Client, Message } = require('discord.js');
const { readdirSync } = require("fs");

module.exports.config = {
    name: "commands",
    aliases: ["cmds"],
    group: "info",
    usage: 'commands',
    guarded: true,
    argsCount: 0,
    botperms: ["EMBED_LINKS"],
    description: "List of all commands"
}

module.exports.run = async (client, message, args) => {
      let categories = [];

        // fs.readdir('./commands/', (err, files) => {
        //             if (err) console.log(err);
            
        //             let jsFile = files.filter(f => f.split('.').pop() === 'js');
            
        //             jsFile.forEach((file, i) => {
        //                 var pullCmd = require(`../../commands/${file}`);
                
        //         client.commands.set(pullCmd.config.name, pullCmd);

        //         console.log('✅ ', 'Registered command \'' + pullCmd.config.name + '\'')

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);
          let name = file.config.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(", "),
        };

        categories.push(data);
      });

        // let cmds = [];
        // client.commands.forEach((command) => {
        //     cmds.push(`\`${command.config.name}\``);
        // })
        // const cmdsEmbed = new MessageEmbed()
        // .setTitle(`List of all ${client.botName} Commands`)
        // .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        // .setThumbnail(client.user.displayAvatarURL())
        // .setColor(client.color)
        // .setDescription(`${cmds.join(', ')}`)

        const embed = new MessageEmbed()
        .setTitle(`📃 List of all ${client.botName} Commands`)
        .addFields(categories)
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(client.color);
    message.channel.send(embed);
}