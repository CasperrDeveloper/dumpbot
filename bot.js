const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready.');
});

client.on('message', message => {
    if (message.guild.name === "Asta's Accounts") {
    	console.log(message.content);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
