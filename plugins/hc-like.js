import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    if (!args[0]) return conn.reply(m.chat, `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://www.tiktok.com/@ripalfiee/video/7323196261417471265?is_from_webapp=1&sender_device=pc`, m);

    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');

    const url = args[0];
    const apiEndpoint = `https://rzky.my.id/api/download/like?url=${url}&apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    const { 
      title, 
      thumbnail, 
      no_watermark
    } = js.result;

    await conn.sendFile(m.chat, thumbnail, null, `❏ Title : ${title}\n\nTunggu sebentar file sedang dikirim!`, m);
    await conn.sendFile(m.chat, no_watermark, null, 'No Watermark!', m);
    m.react('✅');
  } catch (e) {
    console.error(e);
    if (m.sender) {
      conn.reply(m.chat, `_*Terjadi kesalahan!*_`, m);
      m.react('❌');
    }
  }
};

handler.help = ['like'];
handler.tags = ['dl'];
handler.command = ['like', 'likedl'];
handler.register = true

export default handler;