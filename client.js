const { Client, Intents } = require('discord.js');
const { token, conninfo } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
var fs = require('fs')
require('log-timestamp');


//connect the client
client.on('ready', () => {
    console.log('Connected...')
	console.log(`Logged in as ${client.user.tag}!`);
});


//Define messages to interact with, must first be deployed with deploy-commands.js
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const { commandName } = interaction;
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'duck') {
		await interaction.reply(':duck: quack quack :duck:');
	} else if (commandName === 'terraria') {
		//conninfo below is specified as an element in config.json, its just a string
		await interaction.reply (conninfo);
	} else if (commandName === 'mongo') {
		await interaction.reply (' no u ')
	} else if (commandName === 'server') {
		await interaction.reply ('(╯°□°）╯︵ ┻━┻')
	}
});

//specify token in config.json
client.login(token);