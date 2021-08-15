const fs = require('fs');

module.exports = async (client) => {
    fs.readdir('./events/', (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            console.log('✅ ', 'Registered event \'' + file + '\'')
            const event = require(`../../events/${file}`);
            let eventName = file.split(".")[0];
            client.on(event.config.type || eventName, event.bind(null, client));
        });
    });
};