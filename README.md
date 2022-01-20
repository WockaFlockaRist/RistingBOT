# RistingBOT
Small discordbot for small slashcommands


Versions:
npm 8.3.1

node 17.4.0

discord.js 13


# Guide and Usage

Create your application under https://discord.com/developers/applications 

Click on your application and find your clientID and clientsecret under OAuth2

Rename exampleconfig.json to config.json

Turn on developer mode on discord by heading to the regular discord app or webpage.

Click the cog wheel, go to Advanced and tick of developer mode. Now you can copy ID's from guilds like servers, channels etc.

Right click the server you want to add your bot to and click 'Copy ID', this is your guildId.

To add your application to a server, go to your applications under https://discord.com/developers/applications

Click OAuth2>URL Generator and tick off bot and applications.commands.

Give it Send Messages, Manage Messages, Use Slash commands, should be fine, if you make changes be aware that you might need to give it more permissions.

Copy the URL and you will get a list of servers where you can add the bot, you need to have the correct permissions on the server to do this. If the server is not in the list you do not have enough permissions on the server.

If you want to add new or other slashcommands, you need to change the `deploy-commands.js` file.
 
Now you can run deploy-commands.js like so `node deploy-commands.js`, you should get output like `Successfully registered application commands.` If you dont you have not successfully done all previous steps.

After this, your commands should be available if you type `/`in the chatbox of your server.

Now the bot is ready for startup. Run `node client.js` and the bot will respond to your commands.

I use systemd for automatic startup, copy `RistingBOT/systemd/ristingbot.service` to `/etc/systemd/system/ristingbot.service`.

Run `systemctl enable ristingbot.service; systemctl start ristingbot.service` 

# TODO
Add proper shutdown in systemdfile
