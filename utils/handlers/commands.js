const fs = require('fs')

module.exports = (client) => {  
            fs.readdir(`./commands/`, (err, dirs) => {
                if (err) console.log(err);

                dirs.forEach((dir, i) => {
                    fs.readdir(`./commands/${dir}`, (err, files) => {

                        let jsFile = files.filter(f => f.endsWith('.js'))
                        jsFile.forEach((file, i) => {
                    var pullCmd = require(`../../commands/${dir}/${file}`)

                    //var pullCmd = require(`../../commands/${file}`);
                    client.commands.set(pullCmd.config.name, pullCmd);

                    let successfulCmd = true
                 
    
                    if (!pullCmd.config.name) {
                        successfulCmd = false
                    }

                    if (!pullCmd.config.description) {
                        console.log(`❌ -> There is no description in ${pullCmd.config.name}`)
                    }
        
                    if (!pullCmd.config.group) {
                        console.log(`❌ -> There is no group in ${pullCmd.config.name}`)
                        successfulCmd = false
                        return;
                    } else {
                        if (pullCmd.config.group === 'config' && !pullCmd.config.permissions) {
                            console.log(`❌ -> Config group with no permission checking could be a mistake -  ${pullCmd.config.name}`)
                        }
                        if (pullCmd.config.group === 'moderation' && !pullCmd.config.permissions) {
                            console.log(`❌ -> Moderation group with no permission checking could be a mistake -  ${pullCmd.config.name}`)
                        }
                        if (!client.groups.includes(pullCmd.config.group)) {
                            console.log(`❌ -> Unknown group in ${pullCmd.config.name}`)
                            successfulCmd = false
                            return;
                        }
                    };

                    if (successfulCmd === true) {
                        console.log('✅ ', 'Registered command \'' + pullCmd.config.name + '\'')
                    } else {
                        console.log('❌ -> Couldn\'t Load command ' + pullCmd.config.name)
                    }
                    try {
                    pullCmd.config.aliases.forEach(alias => {
                        client.aliases.set(alias, pullCmd.config.name);
                    });
                } catch { }
            })
        })
                })
            })
        
                fs.readdir('./commands/', (err, files) => {
                    if (err) console.log(err);
            
                    let jsFile = files.filter(f => f.split('.').pop() === 'js');
            
                    jsFile.forEach((file, i) => {
                        var pullCmd = require(`../../commands/${file}`);
                
                client.commands.set(pullCmd.config.name, pullCmd);

                console.log('✅ ', 'Registered command \'' + pullCmd.config.name + '\'')
    
                if (!pullCmd.config.name) {
                    console.log(`❌  -> missing a help.name, or help.name is not a string.`)
                }
    
                if (!pullCmd.config.group) {
                    console.log('❌ -> Couldn\'t find any group in ' + pullCmd.config.name)
                    return;
                } else {
                    if (!client.groups.includes(pullCmd.config.group)) {
                        return console.log('❌ -> Unknown group ' + `${pullCmd.config.group} in ` + pullCmd.config.name)
                    }
                }
                try {
                    pullCmd.config.aliases.forEach(alias => {
                        client.aliases.set(alias, pullCmd.config.name);
                    });
                } catch(e) { /*console.log(e)*/ }
            });
        });
}