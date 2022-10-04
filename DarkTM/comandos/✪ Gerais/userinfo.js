const { MessageEmbed } = require('discord.js');
const moment = require("moment")
moment.locale("pt-br")

module.exports = {

    name:"userinfo",
    category:"Gerais",
    aliases: ['infouser'],

run: async (client, message, args) => {

  message.delete();

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "Disponivel";
                break;
            case "dnd":
                status = "Não perturbar";
                break;
            case "idle":
                status = "Ausente";
                break;
            case "offline":
                status = "Invisível";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`ㅤㅤㅤㅤInformações`)
            .setColor(`#010101`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setDescription(`<:Dark_BMember:889046853352562688> **Nick:** \`${user.user.tag}\`\n\n<:Dark_Info:889023844331954207> **ID:** \`${user.user.id}\`\n\n<:Dark_Star:889023716820934666> **Status:** \`${status}\`\n\n<:Dark_Play:889045204722659349> **Atividade:** \`${user.presence.activities[0] ? user.presence.activities[0].name : `Sem atividade`}\`\n\n<:Dark_Time:889027703385247784> **Criada em:** \`${moment.utc(user.user.createdAt).format("DD/MM/YYYY")}\`\n\n<:Dark_Invite:889045723172184114> **Entrou em:** \`${moment.utc(user.joinedAt).format("DD/MM/YYYY")}\``)
            .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))

        await message.channel.send(embed)

    }}