const discord = require("discord.js");
const button = require("discord-buttons");

module.exports = {

    name:"botinfo",
    category:"Gerias",
    aliases: ['binfo', 'infobot'],

run: async (client, message, args) => {

  message.delete();

    let button1 = new button.MessageButton()
    .setStyle("url")
    .setURL("https://dsc.gg/dark™")
    .setEmoji(`889023873427857451`)
    .setLabel("Me Adicione!")

    let button2 = new button.MessageButton()
    .setStyle("url")
    .setURL("https://top.gg/bot/810668573336535071/vote")
    .setEmoji(`889023716820934666`)
    .setLabel("Vote - Top.gg")

    let row1 = new button.MessageActionRow()
    .addComponent(button1)
    .addComponent(button2)

    const embed = new discord.MessageEmbed()
    .setColor('#010101')
    .setTitle("ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤDark™ Informações")
    .setDescription(` \n**->**<:Dark_Info:889023844331954207> **INFORMAÇÕES**\n<:Dark_Dev:889027576880848946> **Desenvolvedor:** \`Dark-Mode#4530\`\n<:Dark_Time:889027703385247784> **Criado:** \`14/02/2021\`\n<:Dark_Star:889023716820934666> **Versão:** \`7.4\`\n\n\n**->**<a:Dark_World:889023465712136242> **STATUS**\n<:Dark_Host:889028699301744692> **Servidores:** \`${client.guilds.cache.size}\`\n<:Dark_Member:889028876125237249> **Usuários:** \`${client.users.cache.size}\`\n<:Dark_Chats:889029008619102239> **Canais:** \`${client.channels.cache.size}\`\n<a:Dark_Ping:889027365622145033> **Ping:** \`${client.ws.ping}ms\`\n\n\n**->**<:Dark_Key:889028784047665182> **INFO HOST**\n<:Dark_Replit:889027069311328298> **Host:** \`Replit\`\n<:Dark_JavaScript:889027018837086250> **Linguagem:** \`JavaScript\`\n<:Dark_DJS:889027177587294229> **Biblioteca:** \`Discord.js\`\n\n\n<:Dark_Point:889027497675612160> Então você quer ver minhas Informações? Bem eu sou um bot simples de Moderação, Diversão e Animes. <:Dark_Point:889027497675612160>`)
    .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    return message.channel.send({
      embed: embed,
      components: [row1]
    });

  }
}