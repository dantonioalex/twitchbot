const tmi = require("tmi.js")


/* 
 This function authorizzation connect on chat with token, 
 the token  generate on apposite  website  : https://twitchapps.com/tmi/
 if possible login on account twitch and genrate a token for use on bot 
 response events , 
*/ 

let  client  ;  //  client is null  change value on function connectionOnChat() with token argument 
class  AuthToken {
    /* Connection on chat and return client object, inizializate class and return obj client  */
    connectionOnChat(urlDiscord,nameBot,token,listChannel) {
        client = tmi.Client({
            identity: {
                username: nameBot,
                password: token,
            } ,
        
            channels: [listChannel]
        })
        client.connect().then(() => {
            console.log("BOT CONNECT ON CHAT  TWITCH")
            fetch(urlDiscord, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Linux\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "Referrer-Policy": "strict-origin"
            },
            "body": "{\"content\":\"This is a webhook message from the browser\",\"embeds\":[],\"attachments\":[]}",
            "method": "POST"
            });
        }).catch(console.error)
        return client
    }
}

module.exports = AuthToken;