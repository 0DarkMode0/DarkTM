const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {

  name:"help",
  category:"Misc",
  aliases: ['ajuda', 'cmds', 'comandos'],
  
run: async (client, message, args) => {

  message.delete();

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setColor("#010101")
    .setFooter(` | Requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setTitle("ﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠ<-Menu de Ajuda->ﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠ")
    .setDescription(` \nOlá eu sou Dark™, um bot Simples, Rapido e Facil de se usar. Para você saber quais são os comandos use os botões abaixo.\n\n\n > Se algum comando não funcionar use **$reportebug**\n> Suporte: https://dsc.gg/dark-suporte`);

    const embed1 = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/889036518855946290/893225045806157901/Gerias.png")
    .setFooter(`©Dark™`)
    .setColor("#010101")
    .setDescription(`**$afk** - Mostra que você ficou AFK\n**$anime** - Informações sobre o anime\n**$animeimg** - Imagem do anime\n**$avatar** - Avatar do usuário\n**$banner** - Banner do usuário\n**$botinfo** - Informações sobre o bot\n**$clima** - Mostra o clima\n**$emoji** - Informações do emoji\n**$ping** - Ping do bot\n**$servericon** - Ícone do servidor\n**$serverinfo** - Informações do servidor\n**$ticket** - Abra um ticket\n**$cticket** - Feche o ticket\n**$userinfo** - Informações do usuário\n**$wiki** - WikiPedia no Discord`);

    const embed2 = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/889036518855946290/893224360352047104/Moderacao.png")
    .setFooter(`©Dark™`)
    .setColor("#010101")
    .setDescription(`**$ban** - Banir o usuário\n**$unban** - Desmanir o usuário\n**$clear** - Limpe  o chat\n**$config** - Config do servidor\n**$inviteblock** - Bloqueie invites\n**$lock** - Tranque um canal\n**$unlock** - Destranque um canal\n**$setprefix** - Sete o prefix do bot\n**$sorteio** - Faça sorteios\n**$votação** - Faça uma votação\n**$setwelcome** - Seta o canal do welcome\n**$welcomeoff** - Deslige welcome\n**$setgoodbye** - Sete o canal do goodbye\n**$goodbyeoff** - Deslige goodbye`);


    const embed3 = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/889036518855946290/893224558935572500/Diversao.png")
    .setFooter(`©Dark™`)
    .setColor("#010101")
    .setDescription(`**$8ball** - Faça uma pergunta\n**$abraço** - Abraçe alguém\n**$beijar** - Beije alguém\n**$cafuné** - Faça cafuné\n**$clyde** - Mensagem da clyde\n**$casar** - Case com alguém\n**$divorciar** - Divorcie-se\n**$jail** - Prenda alguém\n**$laranjo** - Mensagem do laranjo\n**$rip** - Morreu\n**$sus** - Ejete o Impostor\n**$stonks** - Meme Stonks\n**$notstonks** - Meme NotStonks\n**$ship** - Ship 2 pessoas\n**$tapa** - Bata em alguém\n**$trash** - Lixo\n**$slapbutt** - Secreto`);


    const embed4 = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/889036518855946290/893225282545278996/Minecraft.png")
    .setFooter(`©Dark™`)
    .setColor("#010101")
    .setDescription(`**$mcconquista** - Desbloqueie uma conquista\n**$mchead** - Cabeça do Player\n**$mcserver** - Informações do servidor`);


    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`Gerais`)
    .setID(`help1`)
    .setEmoji(`889024946163052574`)
    .setStyle("grey");

    let button2 = new MessageButton()
    .setLabel(`Moderação`)
    .setID(`help2`)
    .setEmoji(`893282527412879370`)
    .setStyle("grey");

    let button3 = new MessageButton()
    .setLabel(`Diversão`)
    .setID(`help3`)
    .setEmoji(`889023716820934666`)
    .setStyle("grey");

    let button4 = new MessageButton()
    .setLabel(`Minecraft`)
    .setID(`help4`)
    .setEmoji(`893291650875531305`)
    .setStyle("grey");

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 150000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })      
    }
  };