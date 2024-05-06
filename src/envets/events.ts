/*TODO: 
 1 .  IF NEW PEOPLE JOIN IN CHAT  EXECUTE COMMAND !NEW  ON THE BOAT,
 2 .  
 3 .  CREATE FUNCION  BAN OR  CHECKED NEW PEOPLE JOIN IN CHAT
*/

const commandsJson = require("../resource/commands.json")
const bannedWord = require("../resource/wordBanned.json")
class Events {
    manageEvents(session) {
        this.eventsMessage(session)
        // Test it 
        this.eventsBan(session)
    }

    eventsMessage(session) {
        session.on('message',(channel, tags, message, self) => {  
            if (self) return

            if (tags["first-msg"]) {session.action(channel,"@" + tags['display-name'] + commandsJson['!new'])}
        
            /* */
            this.commandExecution(message,channel,session)
        })
    }
    commandExecution(message,channel,session)  {
        if (message.startsWith("!")) {
            for (let command in commandsJson) {
                if (message.toLowerCase() == command) {
                   session.action(channel,commandsJson[command])
                }
            }
        }
    }

    eventsBan(session) {
       
        session.on('message',(channel, tags, message, self) => {
            for(let i = 0; i <= bannedWord.length; i++) {
                if (message.toLowerCase() ==  bannedWord[i]) {
                    session.action(channel,"/ban @"+tags['display-name'] + " parola da non usare")
                }
            }
        })
    }
}


module.exports = Events;