const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923319255708";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_08_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwickNPcmFkRlRudGZPWjNyMC9zQWExbmc1ai81aXFFQXNHKzlMRjlRSkl1TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3BjbFc3d3NTLXFkVnZtOExRajVBUVwiLFxuICBcInBob25lSWRcIjogXCI1ZDI1YTY2Yi1hMDU0LTQ2YjctOWQ4My1iYmZmMTQxY2M5ZDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgOTEsXG4gICAgICAxOTgsXG4gICAgICA5NyxcbiAgICAgIDI0NCxcbiAgICAgIDMwLFxuICAgICAgMjIsXG4gICAgICAxMjUsXG4gICAgICAxODAsXG4gICAgICAxMDYsXG4gICAgICAxMDIsXG4gICAgICAyNTQsXG4gICAgICA2MixcbiAgICAgIDEzNyxcbiAgICAgIDEzNSxcbiAgICAgIDIzMCxcbiAgICAgIDE0LFxuICAgICAgMTAsXG4gICAgICA1OCxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDIzOSxcbiAgICAgIDI2LFxuICAgICAgNzksXG4gICAgICAxNjMsXG4gICAgICAyMDEsXG4gICAgICAyNDQsXG4gICAgICAyMzEsXG4gICAgICAxOSxcbiAgICAgIDE5MixcbiAgICAgIDE4MyxcbiAgICAgIDM5LFxuICAgICAgMTU2LFxuICAgICAgNyxcbiAgICAgIDIxOCxcbiAgICAgIDY2LFxuICAgICAgNTUsXG4gICAgICAxMDUsXG4gICAgICA0LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVJTSkVHTEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE4OTg4MjYyMjozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA0NTc4NTk0OTAyMjA1OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMQzYxY1FwTG5FdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3RPZG91RjY2V280OFFsSnBwem5DMmpiK0t1U2doUWg3bkxWL0d5ZEdYbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBaGlKMjJZV0QzRnRQekJ6QUlkK0U1VkNtS0xCSW4remlCNHRwQlhSRlN3SFJlNVlaYlc4Zlp0VmVOR1k5dzZQTk02L2htUVBEc1BQR3o1WFFXV0tCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRc001dzdGQ2JaeXZGajVEbXVFbUtIRzVnR2Nvc1J1cXJJUThxVGZRSzluTjlPU1BybmRSMFh1Rk1Id0dNaEZTTVdjZGlhWjBEZ2kwTHFZMndnZGdCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODk4ODI2MjI6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzg2MDg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQW9xXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBb3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKcnFKTDQxSHhpbDBMVlR5bmpzRjNCT3dGcUJoNmFqMWpGVW5TVWhoRGM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDIxMzc3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "_Uzair khan_",
  packname: process.env.PACK_NAME || "*_Uzair khan_*",
  botname : process.env.BOT_NAME  || "*_`Uzairkhan`_*",
  ownername:process.env.OWNER_NAME|| "`Uzair khan`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
