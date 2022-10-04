const axios = require('axios');
const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {

  name:"banner",
  category:"Gerais",
  aliases: ['getbanner'],
  
run: async (client, message, args) => {

const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
if (!user) return message.reply('Mencione um usuário para pegar o banner!');


axios
    .get(`https://discord.com/api/users/${user.id}`, {
    headers: {
        Authorization: `Bot ${client.token}`,
    },
})
.then((res) => {
    const { banner } = res.data;
    if(banner) {
        const extension = banner.startsWith("a_") ? '.gif?size=1024' : '.png?size=1024';
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;

        const bannerimg = new MessageEmbed()
        .setDescription(`<:Dark_Download:889029128412602408> **Clique** [aqui](${url}) **para baixar o banner**`)
        .setImage(url)
        .setColor('#010101')
        .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

        message.channel.send(bannerimg)
    }})}}