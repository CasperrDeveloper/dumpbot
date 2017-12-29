const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ";";

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
var requestify = require('requestify'); 

client.on('ready', () => {
    console.log('Ready.');
});

client.on('message', message => {
      if(command === 'buy') {
          let member = message.mentions.members.first();
          let clientrole = message.guild.roles.find("name", "Client");
          
          const embed = new Discord.RichEmbed()
          .setTitle("Buy access")
          .setAuthor(client.user.username, client.user.avatarURL)
          .setColor(0x00AE86)
          .setDescription("You can buy access at !url!")
          
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
