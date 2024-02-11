import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    if (!args[0]) return conn.reply(m.chat, `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://www.tiktok.com/@ripalfiee/video/7323196261417471265?is_from_webapp=1&sender_device=pc`, m);

    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');
    const apiEndpoint = `https://rzky.my.id/api/download/cocofun?url=${args[0]}&apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    const { 
      title, 
      desc, 
      like,
      play_count,
      shared,
      resolution,
      duration,
      thumbnail,
      url
    } = js.result;

    await conn.sendFile(m.chat, thumbnail, null, `❏ Title : ${title}\n❏ Decs : ${desc}\n❏ Like : ${like}\n❏ Play Count : ${play_count}\n❏ Shared : ${shared}\n❏ Resolution : ${resolution}\n❏ Resolution : ${duration}\n\nTunggu sebentar file sedang dikirim!`, m);
    await conn.sendFile(m.chat, url, null, 'No Watermark!', m);
    m.react('✅');
  } catch (e) {
    console.error(e);
    if (m.sender) {
      conn.reply(m.chat, `_*Terjadi kesalahan!*_`, m);
      m.react('❌');
    }
  }
};

handler.help = ['cocofun'];
handler.tags = ['dl'];
handler.command = ['cocofun', 'cocofundl'];
handler.register = true

export default handler;