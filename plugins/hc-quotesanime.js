import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');
    const apiEndpoint = `https://rzky.my.id/api/anime/quotesanime?apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    if (Array.isArray(js.result) && js.result.length > 0) {
      const quotes = js.result;
      let message = '';

      for (const quote of quotes) {
        const {
          link,
          gambar,
          karakter,
          anime,
          episode,
          up_at,
          quotes
        } = quote;

        message += `❏ Karakter : ${karakter}\n❏ Anime : ${anime}\n❏ Episode : ${episode}\n❏ Quotes : ${quotes}\n❏ Up At : ${up_at}\n❏ Link : ${link}\n\n`;
      }

      await conn.sendFile(m.chat, quotes[0].gambar, null, message, m);
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

handler.help = ['quotesanime'];
handler.tags = ['anime'];
handler.command = ['quotesanime'];
handler.register = true

export default handler;