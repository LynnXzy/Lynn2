import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    if (!args[0]) return conn.reply(m.chat, `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://nekopoi.care/3d-hentai-demon-slayer-nezuko-fucking-very-well-with-zenitsu/`, m);

    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');
    const apiEndpoint = `https://rzky.my.id/api/anime/nekopoi/detail?url=${args[0]}&apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    if (js.result) {
      const {
        title,
        info,
        img,
        genre,
        stream,
        download
      } = js.result;

      let message = `❏ Title : ${title}\n❏ Info : ${info}\n❏ Genre : ${genre}\n❏ Stream : ${stream}\n\nDownload:\n`;

      for (const dl of download) {
        message += `▶ Type: ${dl.type}\n`;

        for (const link of dl.links) {
          message += `   ${link.name}: ${link.link}\n`;
        }
      }

      await conn.sendFile(m.chat, img, null, message, m);
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

handler.help = ['nekopoidetail'];
handler.tags = ['anime'];
handler.command = ['nekopoidetail'];
handler.register = true

export default handler;