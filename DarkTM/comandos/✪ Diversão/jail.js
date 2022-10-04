const Canvas = require('canvas');
const { MessageEmbed } = require('discord.js');
const Discord = require(`discord.js`);
const canvacord = require("canvacord");
const path = require("path");


module.exports = {

    name:"jail",
    category:"Diversão",
    aliases: ['cadeia'],

    run: async (client, message, args) => {

        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.jail(avatar, false);
        let attachment = await new Discord.MessageAttachment(image, "jail.png");
        
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(`#010101`)
        .setImage("attachment://jail.png")
        .attachFiles(attachment)
        await message.channel.send(fastembed2);
    }
}