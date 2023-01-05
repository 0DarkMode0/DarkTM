const express = require('express');
const app = express();
app.get("/", (request, response) => {
const ping = new Date()
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);  
const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db")
const fs = require('fs')
const weather = require('weather-js')
const ms = require('ms');
const moment = require("moment")
const Canvas = require('canvas');
const disbut = require('discord-buttons')(client);
client.queue = new Map()


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./comandos/`);

['command', 'event'].forEach(x => require(`./handlers/${x}`)(client));



// ================================================== LOGS BOT ================================================== \\



client.on('guildCreate', async (guild) => {
moment.locale('pt-br')
  const canaldelog = client.channels.cache.get('889021758265520128')

  const embedlog = new Discord.MessageEmbed()
  .setTitle('<:Dark_Aprovado:889048703455887402> **|** Me Adicionaram!')
  .addFields(
    {name: 'Informações do servidor:', value: `> **Nome:** \`${guild.name}\`\n> **ID:** \`${guild.id}\`\n> **Membros:** \`${guild.memberCount}\`\n> **Criado em:** \`${moment(guild.createdAt).format("L")} (${moment(guild.createdAt).startOf("day").fromNow()})\`\n> **Dono:** \`${guild.owner.user.tag} (${guild.owner.id})\`\nﾠ`}
)   .setColor('#010101')
    .setTimestamp()
  .setThumbnail(guild.iconURL({ dynamic: true }))
  canaldelog.send(embedlog)
});



client.on('guildDelete', async (guild) => {
moment.locale('pt-br')
  const canaldelog = client.channels.cache.get('889021758265520128')

  const embedlog = new Discord.MessageEmbed()
  .setTitle('<:Dark_Negado:889042255271313429> **|** Me Removeram!')
  .addFields(
    {name: 'Informações do servidor:', value: `> **Nome:** \`${guild.name}\`\n> **ID:** \`${guild.id}\`\n> **Membros:** \`${guild.memberCount}\`\n> **Criado em:** \`${moment(guild.createdAt).format("L")} (${moment(guild.createdAt).startOf("day").fromNow()})\`\n> **Dono:** \`${guild.owner.user.tag} (${guild.owner.id})\`\nﾠ`}
)   .setColor('#010101')
    .setTimestamp()
  .setThumbnail(guild.iconURL({ dynamic: true }))
  canaldelog.send(embedlog)
});



// ================================================== Menção do BOT ================================================== \\



client.on("message", msg => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle("Olá! Como vai?")
  .setColor(`#010101`)
  .setDescription(`<:Dark_Star:889023716820934666> Olá me chamo Dark sou um bot de Diversão, Moderação e Animes. Se você precisar de alguma coisa é só me chamar. <:Dark_Star:889023716820934666>

    ⠀⠀⠀**Meu prefixo:** $

  <a:Dark_CrownW:889024561679577098> **| Owner:** Dark-Mode#4530

  <a:Dark_ArrowR:889023981200474142> **Se você quiser me Ajudar!** 
  ⠀⠀⠀[Clique aqui](https://top.gg/bot/810668573336535071/vote)

  <a:Dark_ArrowR:889023981200474142> **Site do BOT** 
  ⠀⠀⠀[Clique aqui](https://sites.google.com/view/darktm/)

  <a:Dark_ArrowR:889023981200474142> **Servidor de Suporte** 
  ⠀⠀⠀[Clique aqui](https://dsc.gg/dark-suporte)

  <:Dark_Star:889023716820934666> Muito Obrigado por utilizar o Dark™ Assim você me ajuda bastante a ser Reconhecido. <:Dark_Star:889023716820934666>
  `)
  .setFooter(`©Dark™`)
  if(msg.content === `<@!${client.user.id}>` || msg.content === `<@${client.user.id}>`)
  msg.channel.send(embed1)
});



// ================================================== InviteBlocker ================================================== \\



client.on("message", async message => {
  
  const op = db.get(`inviteop_${message.guild.id}`)

  if(op === null) {

  } else {
  
  let embedblock = new Discord.MessageEmbed()
  .setColor('#010101')
  .setDescription(`${message.author} InviteBlocker esta ligado!`)
  
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete();
    await message.channel.send(embedblock);
  }
  
  }
});



// ================================================== Welcome ========================================================= //



var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif';
welcomeCanvas.context.fillStyle = '#ffffff';

Canvas.loadImage('https://cdn.discordapp.com/attachments/889036518855946290/889037125595582494/0.jpg').then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
    welcomeCanvas.context.fillText("welcome", 360, 360);
    welcomeCanvas.context.beginPath();
    welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    welcomeCanvas.context.stroke()
    welcomeCanvas.context.fill()
})




client.on('guildMemberAdd', async member => {

  let chx = db.get(`welcomec_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }
  
    const welcomechannel = client.channels.cache.get(chx)
    
    let canvas = welcomeCanvas;
    canvas.context.font = '42px sans-serif',
    canvas.context.textAlign = 'center';
    canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
    canvas.context.font = '32px sans serif'
    canvas.context.fillText(`Agora temos ${member.guild.memberCount} Membros!`, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(member.user.displayAvatarURL({format: 'png', size: 1024}))
    .then(img => {
        canvas.context.drawImage(img, 393, 47, 238, 238);
    })
    let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.id}.png`)
    try {
        welcomechannel.send(`Olá! ${member}, Seja bem-vindo ao ${member.guild.name}!`, atta)
    } catch (error) {
        console.log(error)
    }
});



// ==================================================   AFK   =================================================== \\



client.on("message", async message => {

let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();
  
  if (mentioned) {
    let status = await afk.fetch(mentioned.id);
    
    if (status) {
      message.channel.send(`**${mentioned.user.tag}** está AFK chame ele em outro momento\n**Motivo:** \`${status}\``).then(i => i.delete({timeout: 10000}));
    }
  }
  
  if (authorStatus) {
    message.channel.send(`**${message.author.tag}** Esta devolta!`).then(i => i.delete({timeout: 6000}));
    afk.delete(message.author.id)
  }
})



// ================================================== Pegando o Token ================================================== \\

client.login('TOKEN DO BOT')
