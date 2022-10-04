const Discord = require('discord.js');


module.exports = {

  name:"slapbutt",
  category:"Diversão",
  aliases: [''],

  run: async (client, message, args) => {
  
    
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

var list =[ 'https://media1.tenor.com/images/d94be9c942b034e4a00a66d1e277ba84/tenor.gif?itemid=14179592',
    'https://media1.tenor.com/images/728496977dca8b4afbc31de587495b03/tenor.gif?itemid=14179589',
    'https://media1.tenor.com/images/9d907ed56fa1c8c011791e494b1d6ce0/tenor.gif?itemid=14179587',
    'https://media1.tenor.com/images/358986720d4b533a49bdb67cbc4fe3e5/tenor.gif?itemid=14179582',
    'https://media.tenor.com/images/7f8b18e190aa7ff57b4549a64c23203b/tenor.gif',
    'https://media.tenor.com/images/6eab6448b9e58b49c0c4be0a8e2bb90c/tenor.gif',
    'https://media1.tenor.com/images/6e0d9c7200c379b194477442bb95b8bd/tenor.gif?itemid=16445753',
    'https://media1.tenor.com/images/35c1ecae2168c49be997871adc2a5d75/tenor.gif?itemid=3412059',
    'https://media.tenor.com/images/9d58468e90e30280c3d7e23eebc9fdb8/tenor.gif',
    'https://media1.tenor.com/images/29c7edfb6df189e313354fb3423ce333/tenor.gif?itemid=15308590',
    'https://media.tenor.com/images/2705a02515942b5ffe5768b2edc76eb6/tenor.gif',
    'https://media.tenor.com/images/9d58468e90e30280c3d7e23eebc9fdb8/tenor.gif',
    'https://img-comment-fun.9cache.com/media/aGZ8eW0/agxVr6d6_700w_0.jpg'
  ];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#010101')
        .setDescription(`${message.author} acaba de dar um tapa na bumdinha de ${user}`)
        .setImage(rand)
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  message.channel.send(embed);
}}