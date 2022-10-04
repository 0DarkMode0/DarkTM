const Canvas = require('canvas');
const Discord = require('discord.js');


module.exports = {

    name:"notstonks",
    category:"Diversão",
    aliases: [''],

    run: async (client, message, args) => {


let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
pessoa = message.author
}
    const wallpaper = await Canvas.loadImage('https://cdn.discordapp.com/attachments/889036518855946290/889038949585154048/not-stonks.jpg');
    const avatar = await Canvas.loadImage(pessoa.avatarURL({dynamic: false, format: 'png'}));
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    ctx.drawImage(wallpaper, 0, 0, canva.width, canva.height);
    ctx.drawImage(avatar, 150, 10, 200, 200);
    const attach = new Discord.MessageAttachment(canva.toBuffer(), 'NotStonks.png');
    message.channel.send(attach);

    
}}