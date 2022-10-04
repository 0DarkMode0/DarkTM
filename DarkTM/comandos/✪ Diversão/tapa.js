const Discord = require('discord.js');


module.exports = {

  name:"tapa",
  category:"Diversão",
  aliases: ['slap'],

  run: async (client, message, args) => {
  
    
var list = [
  'https://i.pinimg.com/originals/92/11/ed/9211ed04d027b5aaa557708b81609eb5.gif',
  'https://media.tenor.com/images/d53510626230fc2654fb8a8c3e3b3161/tenor.gif',
  'https://www.intoxianime.com/wp-content/uploads/2017/04/tumblr_ooub8fIHkT1qz64n4o2_400.gif',
  'https://www.intoxianime.com/wp-content/uploads/2017/06/ShingekinoKyojin-Episode35-Omake-4.gif',
  'https://pa1.narvii.com/6416/88994a47e59980fc692193850739df2db3edc9f5_hq.gif',
  'https://cdn.discordapp.com/attachments/778414009362939914/820851844577755146/a5a50f5a4e1434059e976fd5f638b119.gif',
  'https://cdn.discordapp.com/attachments/778414009362939914/820852436062306304/13b6b806cc2ef2a79b2d626cd19fea2e.gif',
  'https://cdn.discordapp.com/attachments/778414009362939914/820852436402831360/6557f684d6ffcd3cd4558f695c6d8956.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('Mencione um Usuario Valido');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#010101')
        .setDescription(`${message.author} Bateu ${user}`)
        .setImage(rand)
        .setFooter('Pra que agredir :(')
  await message.channel.send(embed);
}}