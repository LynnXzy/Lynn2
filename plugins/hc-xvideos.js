import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    if (!args[0]) return conn.reply(m.chat, `Masukkan Text!\n\ncontoh:\n${usedPrefix + command} Moms`, m);

    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');
    const apiEndpoint = `https://rzky.my.id/api/search/xvideos?query=${args[0]}&apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    if (Array.isArray(js.result) && js.result.length > 0) {
      const apps = js.result;
      let message = '';

      for (const app of apps) {
        const {
          title,
          duration,
          quality,
          thumb,
          url
        } = app;

        message += `❏ Nama : ${title}\n❏ Duration : ${duration}\n❏ Quality : ${quality}\n❏ Image : ${thumb}\n❏ Url : ${url}\n\n`;
      }

      await conn.sendFile(m.chat, apps[0].thumb, null, message, m);
      m.react('✅');
    } else {
      m.react('❌');
      conn.reply(m.chat, `_*Tidak ada hasil atau terjadi kesalahan!*_`, m);
    }
  } catch (e) {
    console.error(e);
    if (m.sender) {
      conn.reply(m.chat, `_*Terjadi kesalahan!*_`, m);
      m.react('❌');
    }
  }
};

handler.help = ['xvideo'];
handler.tags = ['search'];
handler.command = ['xvideo'];
handler.register = true

export default handler;
