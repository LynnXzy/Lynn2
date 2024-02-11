export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`🌟 *Hallo ${username}, Selamat datang di HeavyCraft-MD* 🏻🖤
📲 _Jika mau, ketik .menu untuk melihat all command saya_ 💀

📌 *Setiap pertanyaan atau saran, Anda dapat menghubungi owner saya:* 🖤
📩 wa.me/6281281872699 📭🖤💀🖤

💀🖤 *Jika Anda ingin mendukung proyek HeavyCraft-MD, Anda Dapat Merekomendasikan Bot Saya 🖤💀*`) 
user.pc = new Date * 1
}