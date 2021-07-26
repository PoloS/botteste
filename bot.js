const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot foi iniciado. Com ${client.users.size} usuários, em ${client.channels.size} canais e ${client.guilds.size} servidores.`)
})

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLocaleLowerCase();


    if (message.author.username === "Boltera") {
        const m = await message.channel.send(`Que porra nenhuma, Lee! Vtnc!`);
        return;
    }
    if (message.author.username === "DeathMusic") {
        const m = await message.channel.send(`Para com essa mentira, Monstro... PQP!`);
        return;
    }
    if (message.author.username === "Polo") {
        const m = await message.channel.send(`David é foda e ainda joga Ragnarok.`);
        return;
    }
    if (message.author.username === "Ryan Six") {
        const m = await message.channel.send(`Tá na hora da insulina, Gordo Imundo do krai.`);
        return;
    }
    //console.log(message);
})

client.login(config.token);