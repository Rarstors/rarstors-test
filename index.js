const Discord = require ("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";


Client.on("ready", async () => {

    console.log("bot opérationnel");

});


Client.login(process.env.TOKEN);