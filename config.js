//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jamesmarthings474@gmail.com";
global.location = "united kindom,nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Markbot-md/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaaeRqT6LwHjV2plXS3y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaaeRqT6LwHjV2plXS3y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e548c60375272c01182ff.jpg";
global.devs = "8132770719";
global.sudo = process.env.SUDO || "8132770719";
global.owner = process.env.OWNER_NUMBER || "8132779719";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e548c60375272c01182ff.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JtdzVUeXgzYkZKUzVCNk9NZzJDM3Q1RTV4aVBpc0g5bFZXZU5YWERrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE1iM1QxYi9ocjdySHhLKzBJL0xjNHBHZGt2REtOUXE2THVnYjRjWEExRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SEk5ZE4xVTJRcXlkM1NKeDZ1ajEyMWN2a1FJVkZoVkdpanZrTVJRdDBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJielFoUUxvcy90dGlVQzJWakV2dzJ4VXdVZWRGMTQvWHVIV2dYT0Y4ZGtFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQVGt0aERhZVZDZm8xWGtoeTNLcWcxbldXYVFDUkNWb08xNTh2SDZaM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlpWTBIdm56NFVFVGRnNEFRV3paUkRNVHpEMWpuSzFqRmxsZjVoNzByajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhOK24zUStmREkzOHdFdjgySHk5Y3JwT0ZQSGljN1hXWndLc3pienEzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlpwWll1d21sYTRqLzNrNWVWbEErNEQwdFcvK2pkQWJ6V2xXSGQ2NWlXOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNUUTZ2SDdMaTY0Qk5pOXEybGw2cjRCK09LMDkxdGdkMDJXR2FEbEhQVlBQSlltUnVhQjl4b2l3cW1NNUdtZzYvL0tyQWNUUTVBMTVoMHBZUjEyT2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJxRUFpdDlTQWNVYkkvRnF4cThwbjhGVk1CTmJEM2VJU1hpeDRvUzZNbk5NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZTE10X0hpTlEwR0tIRUNuSDdnT0x3IiwicGhvbmVJZCI6IjcyMzc1NDg0LThlNDQtNDYzZC1hOGIwLWQ4NDZmZGYzMzlkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTXRMY1kzQVF0R05nWGJuZERXa3ZHcGxzVTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk01bExxSDI2c09UM1ZkSjJVT3hGVUoxN240PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlgyTU1EWTFXIiwibWUiOnsiaWQiOiIyMzQ4MTMyNzcwNzE5OjQ3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsOYZmZpY2nDo2wgS3kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09QMXc1QUJFTFMvdDdJR0dDb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkQ3OEVXbDdCaVhSVGxqcGkrTnNDNWc4SXhZZ2YwVzBsT2M3QlJQQUMzSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZPaDB1U0dYK1hKTlFzY2RuSmlSZTdmTk9aMUY1b0MyYjN6ZW1tRVd3b1FmaCt6ZTZ4dlZOZWpZN3U3NnN6T3E0OG5WKzFsRWEwZDRHRG5kZHJFRkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpWjkwREFZYkwyOTl6RFpDdWVqWktlRUQ2QUN5Mm5wK1o2cEFyVSt2aVhXZTVVSnJYV2ZxdnRrUDYxQnBMU1NPbjArTHFmZmYvWGVkZjRIMkNzblJpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzI3NzA3MTk6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUSsvQkZwZXdZbDBVNVk2WXZqYkF1WVBDTVdJSDlGdEpUbk93VVR3QXR4dyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjM3OTU4Nn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "power by official_ky",
  author: process.env.PACK_AUTHER || "Official",
  packname: process.env.PACK_NAME || "OFFICIAL-KY",
  botname: process.env.BOT_NAME || "OFFICIAL BOT",
  ownername: process.env.OWNER_NAME || "OFFICIAL_KY",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat,wa.me,https//:www.what'sapp.com,all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "OFFICIAL").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
