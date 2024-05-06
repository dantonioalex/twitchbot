const  auth   =  require("./auth/login.ts")
const env = require('dotenv') // Import envirioments 
const events = require("./envets/events.ts")

env.config()
const AuthObj = new  auth(); // Declared new object 
const session = AuthObj.connectionOnChat(process?.env.WEBOOK_DISCORD,process?.env.NAME_BOT,process?.env?.TOKEN,process.env.CHANNEL_NAME) // Callback function on class and inizializate bot
const manageEvents = new events();
manageEvents.manageEvents(session)
 



