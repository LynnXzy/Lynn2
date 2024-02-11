import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    if (!args[0]) return conn.reply(m.chat, `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://www.tiktok.com/@ripalfiee/video/7323196261417471265?is_from_webapp=1&sender_device=pc`, m);

    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');

    const url = args[0];
    const apiEndpoint = `https://rzky.my.id/api/download/tiktokv2?url=${url}&apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    const { 
      video, 
      username, 
      description
    } = js.result;

    await conn.sendFile(m.chat, video, null, `❏ Title : ${username}\n❏ Deskripsi : ${description}`, m);
    m.react('✅');
  } catch (e) {
    console.error(e);
    if (m.sender) {
      conn.reply(m.chat, `_*Terjadi kesalahan!*_`, m);
      m.react('❌');
    }
  }
};

handler.help = ['tiktok'];
handler.tags = ['dl'];
handler.command = ['tiktok', 'tt'];
handler.register = true

export default handler;