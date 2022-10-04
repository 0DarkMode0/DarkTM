const Discord = require("discord.js");

module.exports = {

  name:"discord",
  category:"Gerais",
  aliases: [''],
  
run: async (client, message, args) => {

  message.delete();

 try {
 let name = ('Discord');

 let avatar = {avatar: 'https://cdn.discordapp.com/attachments/889036518855946290/889938178281197568/Discord.png'}


 let dark = [
    '**ERROR 404**',
    '**Easter Egg**'

];
let arg = dark[Math.floor(Math.random() * batata.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
 message.reply('**Eu não tenho permissão para criar um Webhook neste servidor**')
 }


}}