

const { Client, GatewayIntentBits, channelLink, InteractionCollector } = require("discord.js");
const { readFileSync, writeFileSync } = require("fs");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () =>{
    console.log("Application is running");
});

let toggleOui = false

client.on("messageCreate", message => {             //évènement déclenché lorsqu'un message est créé
    if(message.author.bot) return;                  //si l'auteur du message est un bot, on ne fait rien

    
    function occurences(str){                                           //on créé la fonction occurences qui compte le nombre de fois qu'une suite de caractère "str" apparaît dans le message
        let curIndex = 0;                                               //on commence à l'index 0 du message
        for (let i = 0; i !== -1; i++) {
            if(message.content.indexOf(str, curIndex) === -1){          //la méthode indexOf renvoie -1 si il ne détecte pas la châine str dans le message à partir de curIndex, dans ce cas on renvoie i
                return i;
            } else {                                                    //si la chaîne contient str, indexOf ne renvoie pas -1 
                curIndex = message.content.indexOf(str, curIndex) + 1;  //dans ce cas on met à jour curIndex pour recommencer la boucle à un index supérieur à celui de la chaîne str précédente
            }
        }
    }

    
    let antiFeur = readFileSync('antifeur.txt', {encoding: 'utf8'}).split(',')

    if (message.content==='.feur antifeur'){
        
        const idIndex = antiFeur.indexOf(message.author.id)
        if( idIndex === -1){
            antiFeur.push(message.author.id);
            message.reply('Je ne répondrai plus à vos messages')
        }else{
            antiFeur.splice(idIndex, 1)
            message.reply('Je répondrai à nouveau à vos messages')
        }
        writeFileSync('antifeur.txt', antiFeur.join(','))
    }




    if(message.content === ".feur ouistiti" && toggleOui){
        toggleOui=false
        message.reply('Je ne répondrai plus à "oui" désormais')
    } else if((message.content === ".feur ouistiti")){
        message.reply('Je répondrai à nouveau à "oui"')
        toggleOui=true
    }

    const banWords = occurences('Quiz')+occurences('quiz')+occurences('Quid')+occurences('quid')+occurences('antifeur')+occurences('anti-feur')+occurences('quoiqu') + occurences('Quoiqu') + occurences('QUOIQU') +occurences('acqui') +occurences('Acqui') +occurences('ACQUI') +occurences('Commenta') +occurences('Commenta') +occurences('COMMENTA') +occurences('ouis')+occurences('nquiète');           
    const de_quoi = occurences('de quoi') + occurences('De quoi') + occurences('dequoi') + occurences('Dequoi');    //on additionne les occurences de plusieurs orthographes qu'on enregistre dans une constante
    const DE_QUOI = occurences('DE QUOI')
    const pourquoi = occurences('pourquoi') + occurences('Pourquoi')
    const POURQUOI = occurences('POURQUOI')
    const qui = occurences('qui') + occurences('Qui')
    const QUI = occurences('QUI')
    const quoi = occurences('quoi') + occurences('Quoi')
    const QUOI = occurences('QUOI')
    const comment = occurences('comment') + occurences('Comment')
    const COMMENT = occurences('COMMENT')
    const oui = occurences('oui') + occurences('Oui')
    const OUI = occurences('OUI')
    const hein = occurences('hein')+occurences('heiin')+occurences('heiiin')+occurences('heiiiin')+occurences('heiiiiin')+occurences('heein')+occurences('heeiin')+occurences('heeein')+occurences('heeeiin')+occurences('heeeiiin')+occurences('heeeein')+occurences('heeeeiin')

    if(antiFeur.indexOf(message.author.id) === -1){if(banWords === 0){
        if(de_quoi > 0){                        //si il y a au moins un "de quoi" on répond
            let reply = 'De feur'               //le premier morceau contient la majuscule
            for(let i=1; i< de_quoi; i++){      //si il y a plus d'un "de quoi" on lance la boucle pour compléter le nombre de feur requis
                reply = reply + ', de feur'
            }
            reply = reply + ' !'                //on termine par le point d'interrogation
            message.reply(reply)
        } else if(DE_QUOI > 0){
            let reply = 'DE FEUR'
            for(let i=1; i< DE_QUOI; i++){
                reply = reply + ', DE FEUR'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(pourquoi > 0){
            let reply = 'Pour feur'
            for(let i=1; i< pourquoi; i++){
                reply = reply + ', feur'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(POURQUOI > 0){
            let reply = 'POUR FEUR'
            for(let i=1; i< POURQUOI; i++){
                reply = reply + ', FEUR'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(qui > 0){
            let reply = 'Kette'
            for(let i=1; i< qui; i++){
                reply = reply + ', kette'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(QUI > 0){
            let reply = 'KETTE'
            for(let i=1; i< QUI; i++){
                reply = reply + ', KETTE'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(quoi > 0){
            let reply = 'Feur'
            for(let i=1; i< quoi; i++){
                reply = reply + ', feur'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(QUOI > 0){
            let reply = 'FEUR'
            for(let i=1; i< QUOI; i++){
                reply = reply + ', FEUR'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(comment > 0){
            let reply = 'Tateur'
            for(let i=1; i< comment; i++){
                reply = reply + ', tateur'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if(COMMENT > 0){
            let reply = 'TATEUR'
            for(let i=1; i< COMMENT; i++){
                reply = reply + ', TATEUR'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if((oui > 0) && toggleOui){
            let reply = 'Stiti'
            for(let i=1; i< oui; i++){
                reply = reply + ', stiti'
            }
            reply = reply + ' !'
            message.reply(reply)
        }  else if((OUI > 0)&&toggleOui){
            let reply = 'STITI'
            for(let i=1; i< OUI; i++){
                reply = reply + ', STITI'
            }
            reply = reply + ' !'
            message.reply(reply)
        } else if((hein > 0)){
            let reply = 'Deux'
            for(let i=1; i< hein; i++){
                reply = reply + ', deux'
            }
            reply = reply + ' !'
            message.reply(reply)
        }
    }}

    function destroy(){
        client.destroy();
    }    
    if(message.content === ".feur stop"){
        message.reply('Je reviendrai Kyan !');
        setTimeout(destroy,1000)
    }
})



/*
 else if(X > 0){
    let reply = 'Str'
    for(let i=1; i< X; i++){
        reply = reply + ', str'
    }
    reply = reply + ' !'
    message.reply(reply)
}
*/














client.login("MTA2NjcxOTc0ODc4OTg5NTIzOA.G3CGpS._UzXS4nSqLRlBkEDCr4w_IxMLrHVNLNuCdDAEU")      //Put your discord bot token between the ""