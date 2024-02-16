import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['601127905062', 'Dibz', true]
]

global.mods = ['601127905062']
global.prems = ['601127905062', '60169392703', '']

global.HeavyCraft = "" 
global.lastm = 'Lynn MD'
global.heavy = 'Lynn - MD' // nama bot 
global.confirmCode = ""


// RZKY API
global.web = "https://whatsapp.com/channel/0029VaLhfk41XquTnFDHuy45"
global.rzky = "xxxx" //isi dengan apikey kamu
global.noowner = "601127905062"

//TRIPAY
global.apitripay = "tWWtxTjbn7jHjU1QEbRDLFS3T7oo4JmuuhCSZRiH" //isi dengan apikey tripay kamu
global.privatekey = "SuYEC-31Scc-EKQKi-N7qBg-JzNSx" //isi dengan privatekey tripay kamu
global.merchant = "T23423" //isi dengan merchant tripay kamu

// Sticker WM
global.packname = 'Botz By'
global.author = 'Adib'
global.waig = 'Ikuti saya di Instagram\nhttps://www.instagram.com/al_aadiyatt07/\n'
global.thumb = 'https://d.top4top.io/p_29628ocym1.png' // thumbnail bot ( foto menu )
global.grupwa = 'https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD'
global.wagit = 'https://github.com/LynnXzy'
global.wayt = 'https://youtube.com/@lynnxzy2951'
global.wapyp = 'https://paypal.me/itsmeikyxsec404'

global.fglog = 'https://d.top4top.io/p_29628ocym1.png'
global.numero = ['601127905062']
global.wait = 'Sedang diproses, mohon tunggu...'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
