const axios = require('axios');
const { MessageEmbed } = require('discord.js');


module.exports = {

    name:"abraço",
    category:"Diversão",
    aliases: ['hug'],
  
    run: async (client, message, args) => {

        
        const url = "https://some-random-api.ml/animu/hug";

        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;


        } catch (e) {
            return message.channel.send(`Ocorreu um erro tente novamente!`)
        }


        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('Mencione um Usuário Valido!');
}
        
        const embed = new MessageEmbed()
            .setColor('#010101')
            .setDescription(`<a:Dark_Duck:889033748409122916> ${message.author} **abraçou** ${user}**!**`)
            .setFooter('Ahh que Fofo!')
            .setImage(image.link)

        await message.channel.send(embed)
    }
}