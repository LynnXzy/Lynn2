import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281281872699', 'Rzkymlna', true]
]

global.mods = ['']
global.prems = ['', '', '']

global.HeavyCraft = "" 
global.lastm = 'Heavycraft MD'
global.heavy = 'HeavyCraft - MD' // nama bot 
global.confirmCode = ""


// RZKY API
global.web = "http://rzky.my.id/"
global.rzky = "xxxx" //isi dengan apikey kamu
global.noowner = "6281281872699"

//TRIPAY
global.apitripay = "tWWtxTjbn7jHjU1QEbRDLFS3T7oo4JmuuhCSZRiH" //isi dengan apikey tripay kamu
global.privatekey = "SuYEC-31Scc-EKQKi-N7qBg-JzNSx" //isi dengan privatekey tripay kamu
global.merchant = "T23423" //isi dengan merchant tripay kamu

// Sticker WM
global.packname = 'HeavyCraft - MD'
global.author = 'HeavyCraft - MD'
global.waig = 'Ikuti saya di Instagram\nhttps://www.instagram.com/rizkymaulanasidik_/\n'
global.thumb = 'https://d.top4top.io/p_29628ocym1.png' // thumbnail bot ( foto menu )
global.grupwa = 'https://chat.whatsapp.com/CyJRUV9qz5IGAAahA2ALA9'
global.wagit = 'https://github.com/Ikyy69'
global.wayt = 'https://youtube.com/@rzy'
global.wapyp = 'https://paypal.me/itsmeikyxsec404'

global.fglog = 'https://d.top4top.io/p_29628ocym1.png'
global.numero = ['6281281872699']
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
