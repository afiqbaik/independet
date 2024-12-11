/*

 🏴‍☠️ Created by danadyaksa
 🏴‍☠️ Dilarang Keras Hapus Credit^^
 
 Contact Me:
 Telegram : t.me/DanadyaksaDev
 
*/

global.owner = [
  "6285648321460", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.ownername = '𝙳𝚊𝚗𝚊𝚍𝚢𝚊𝚔𝚜𝚊𝙳𝚎𝚟'
global.botname = '𝄽𝙸𝚗𝚍͢𝚎𝚙𝚎ͯ𝚗𝚍͢𝚎𝚗𝚝𝟸𝟷⃟⃟⃟⃟⃟⃟⃟🏴‍☠️'
global.version = '𝟷.𝟶.𝟶'
global.nomorowner = '6285921432812'
global.nomorbot = '62xxx'
global.urlfoto = 'https://'

//========== Setting Panel Server  1==========//
global.domain = "domain"
global.apikey = "plta"
global.capikey = "pltc"
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})