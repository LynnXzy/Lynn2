import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
     if (!who) throw `✳️ Tag atau sebutkan seseorang\n\n📌 Contoh : ${usedPrefix + command} @tag`
     
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 
   m.react(rwait)
    let rki = await (await fetch(`https://rzky.my.id/api/anime/waifu?apikey=${rzky}`)).buffer()
   let stiker = await sticker(null, rki, `(${name2}) HeavyCraft`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('👊🏻') 
   
}

handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu|waifu)$/i
handler.group = false
handler.register = true

export default handler