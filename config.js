const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/Thumbnail-02-01-2" ; // SET LOGO FOR IMAGE 



global.devs = "923019718772" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923019718772";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "5",  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923019718772,923xxxxxxxx";



module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || "❣️",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sahil²²¹-xd" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sahil²²¹-xd 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sahil-xd",
  ownername:process.env.OWNER_NAME|| "It'x Sahil",

  sessionName:process.env.SESSION_ID|| "SUHAIL_21_37_02_01_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkcrZE45cXJoci9oZVhlWG9nK3pSRXdmWXF4ZWtqTVZmMk1pN0k2N0VFQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFJbmcxNExqbHR2TFd6bTF5dEtTbG4yQVlWcloxSlN3L0hXK3BBcUhvd0E9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0hlSXZMMGUwd3JMSmJndXFBMVJSV01XcmhVWDhxVEVqWHRVdHFqWWFFWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlU0alc4MWtLNGs5cDh1Rlh3NzFiQXdnT1U1UVp3N3hWWUlMOXF3aUxCVk09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUtZQ1N4SENmN2VvUGlYNCtvYkdBMGVzZURIY3RwbnhHV09PVGhFSnZsbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjh0ZndtVWF4RG1zZzNISHRpazZueWVlTTNEb2pLaGt6dk9YOHdFL2JmbGc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPRWkrVHdxY1hGTmk4czh0bGhlN0htdjlreWF4aldEN3Z0SkprYS9RMTNnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidWN4YVpJcFliZ1cwREhqeE9UNGZUSUowMzBMRkZkUDhrS1pSSFdhUE55TT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDMG9WNHcwbWZpenRoekY2bSt2SlRqQWtTMjBoc3FRaDlEVS9sQVJwYTNBTnl3ZUdYVWxHeFdGc0hmYkQ0cXYxaWlibFNtR2RMN0FiUUhMM0FZbitoZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjE3LFwiYWR2U2VjcmV0S2V5XCI6XCJQSjJkTkdxYjRQRWVFdlpmandtWWkvdDU4eW9vNW9XUzM1MTNJZjNoQUhFPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMDE5NzE4NzcyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNBOEUxNjlBNTJCQjIyREFGMTkzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY4MjM0MjB9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMDE5NzE4NzcyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNBRUM1NURDRjczMTEwNDQ4NjU0XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY4MjM0MjF9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMDE5NzE4NzcyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNBMDBBRUNDNjkyODBDMkU2MjA0XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY4MjM0MjR9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJhWXlDblkxc1F4aVN6cy14MEkyRXBnXCIsXCJwaG9uZUlkXCI6XCIzYmFlNjUwNC05ODMyLTQ4M2UtYjE3Ni00MTEwNmE4NmQ4ODNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFYTUR0by9ZdUVobnpPTHVkTkE1QzlzbnU1az1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUc3QzRMWXhOMWtSYmdzSXc4eWNEOWtoc1VZPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNN0g4TjRIRVBlZDhLMEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiZFBQb0tqamRvOVlqbktVeFFhcWNqZ2ozc1V1bGY3S04xT20rTTQyOWZoMD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIklHV2M0WFptK3lnNFRDdU95WVEzcDdub21YOUhDNmNMcUEwL3FPNWF6dElFeVYwbUhSOUxlVHN6VWNmMDhGN0M0NkxCU1h2dmlFOVdoVVFYSFNXY0FnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwicEo0Ri9YbDA3cEs1WEI1SStaT0p4SDFzWXo0NmJyNlBPbHNKcGNKNExCTS92bkZPT3VuRGswNCtnL2IrQzlWcVBlRkdJRFNmbVNibjhUWjFnRzVuZ2c9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjkyMzAxOTcxODc3MjoxMkBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyMDE5OTYzMzg1MDU3NjoxMkBsaWRcIixcIm5hbWVcIjpcIkd1ZXNhaGlsXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMDE5NzE4NzcyOjEyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlhUejZDbzQzYVBXSTV5bE1VR3FuSTRJOTdGTHBYK3lqZFRwdmpPTnZYNGRcIn19XSxcInBsYXRmb3JtXCI6XCJpcGhvbmVcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDY4MjM0MTgsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSklxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSklxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQldoRnJEdWY3UHVHcE1yelZ4ZWtLelVhOEV6SHdOcHBhL2xBaHNod0RIMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDc4MDI0NjU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDY4MjM0MTc3NDZcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
