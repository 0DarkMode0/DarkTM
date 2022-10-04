const weather = require("weather-js")
const Discord = require("discord.js")


module.exports = {

    name:"clima",
    category:"Gerais",
    aliases: [''],
  
    run: async (client, message, args) => {

      message.delete();
        
if (args.length < 1) {
    message.channel.send("Você não falou nenhum local!");
    return 0;
}
weather.find({ search: args.join(' '), degreeType: 'C', lang: 'pt-BR' }, (err, result) => {
    if (err) throw err;
    result = result[0];
    if (!result) {
        message.channel.send("Fale um local que exista, ou coloque o nome corretamente!");
        return;
    }
    var current = result.current;
    var location = result.location;
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Tempo em ${location.name}`)
    .setDescription(`${current.skytext}`)
    .addField('Temperatura:', `${current.temperature}° C`, true)
    .addField('Sensação térmica:', `${current.feelslike}° C`, true)
    .addField('Umidade:', `${current.humidity}%`, true)
    .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setColor('#010101')
    message.channel.send(embed);
});
}}