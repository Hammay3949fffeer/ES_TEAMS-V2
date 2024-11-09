//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "examsolutionteam@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec33ecf51f928d0a89a1b.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "923286835876";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lvNFVhc2xhSWhhZ2dqd3BidWtnN0hxUU9NWS81OS84YURBZnFtVTFYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU1KNDJtQllhdHc3K2VRSGFlWGNLQUYwZWYxY2Eya0IrM2hFVzhJeEV6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRlFtcWYvOEprcDdYOWhzNWh3OVQwWVlMNFl1akJiU25iUWs4M282aGxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1djN1K3E2eXphS3M2WExmSU0vYmdXRFhjWW80VE1iMWV6VENibkRHNGg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHUFgrYnRoWnlpNEZIL0xhZmFURHFXWEVYOGpqdGU0Nnc0Q2J5TVA1RlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNZVEhwS1k2QUJQWXU4WGorQ2laeFduRCsweGdZWGNGb052TWdQajNMZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUo2b1FwTlRnYzdxRXZYTGhuNS85UEdFMzg2b05kU2xVWXl0STllYmZucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmdUQ21jcDY3S1dCTjM4bldqeEJrVzBIR0VRRmxhdFgwMjJFMnRiVmRWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9OMHFCbDk4aVFIT1JRZGJKMVlCVjRKN2Y1Q0xzdWE2dmVFOGhIZUdZMmR2M1BJOUVPUUcxRkdPd0xmTFdIRVpER1RPWHY4eldsei9uVUdXc3hXY2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJtMDd4TndIWlpINHl2cjB6RENWSmthdTlhUUZWYVhtMHIyQW5hWFhEWWVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRY3Y1QWxZTVJ3Q1NmcTBfZ3ZmYnB3IiwicGhvbmVJZCI6ImI1NWM0NjBlLTA2ODMtNDVjZS1hMWNjLWVjNjg3YjUzNWNhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4YjZOUTB1M0hCNDFVL0d5cTFWT1YrNUZBMVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczYrT1JIMTkvMDlMemRsM2lRTXlvK1N0WTVZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhIQ1NDMjQ2IiwibWUiOnsiaWQiOiI5MjMyODY4MzU4NzY6OTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x2YTBaMEhFSkxZdjdrR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRvVWNpSkc3UEwveHY5T0p1TmQ0Q1d6dTBuQmdoM1dnb0thTEF5MDlxU3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndTbklhZnJIMlVIKy9qdGRjd0V1bUhCeWhnK1RSMFRSbHgyNFl6TjdUUSsyYlFBekt6YVJ0dGYzUDdsZXo4QjIxQ1pVOTE0b2NUVy9SZ2k0WEhKYUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIza1Yydm1DQlRkb1l1cWNqVTdONVFaamRHSEVDVHlLZEEzTG94K2tPTDl6RUFHTlZmRFRIU3hqVHNldTBuZ3V2ajhzcmxpa1o1N1l0c3Q2aTlGWjloQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI4NjgzNTg3Njo5MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNkZISWlSdXp5LzhiL1RpYmpYZUFsczd0SndZSWQxb0tDbWl3TXRQYWtyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMTkzODg3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVOZCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  author: process.env.PACK_AUTHER || "ES TEAMS-V2",
  packname: process.env.PACK_NAME || "ES TEAMS",
  botname: process.env.BOT_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  ownername: process.env.OWNER_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕋𝔼ℂℍ👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
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
