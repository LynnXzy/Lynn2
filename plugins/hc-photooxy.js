import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, command, text, usedPrefix }) => {
      const dates = new Date(); 
      const timestamp = dates.getTime();     
      const date = new Date(timestamp);
      const hour = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const formattedTime = hour + ":" + minutes + ":" + seconds;

      if (command == 'memory') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .memory')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/memory?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'toilet') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .toilet')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/toilet?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'place') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .place')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/place?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'burning') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .burning')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/burning?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'shattered') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .shattered')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/shattered?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'mirrors') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .mirrors')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/mirrors?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'anaglyph') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .anaglyph')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/anaglyph?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'iphone') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .iphone')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/iphone?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'flame') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .flame')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/flame?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'frame') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .frame')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/frame?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'nature') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .nature')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/nature?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'ripped') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .burning')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/ripped?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'tearing') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .tearing')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/tearing?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
    if (command == 'exposure') {
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = await conn.getName(who)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return m.reply('Kirim/Reply Gambar Dengan Caption .exposure')
        m.reply(wait)
        let media = await q.download()
        let url = await uploadImage(media)
        let hasil = await (await fetch(`https://rzky.my.id/api/photooxy/exposure?url=${url}&apikey=${rzky}`)).buffer()
        await conn.sendFile(m.chat, hasil, '', 'Nih kak sudah jadi!', m)
    }
}
    handler.command = handler.help = ['memory','toilet', 'exposure', 'tearing', 'ripped', 'nature', 'frame', 'flame', 'iphone', 'anaglyph', 'mirrors', 'shattered', 'burning', 'place']
    handler.tags = ['photooxy'];
    handler.premium = false;
    handler.group = false;
    handler.register = true
    
    export default handler;