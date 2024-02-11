import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');
    const apiEndpoint = `https://rzky.my.id/api/random/cerpen/horor?apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    if (js.result) {
      const {
        title,
        author_url,
        author_name,
        story
      } = js.result;

      let message = `❏ Title : ${title}\n❏ Author : ${author_name}\n❏ Author URL : ${author_url}\n❏ Story : ${story}\n`;

      await conn.reply(m.chat, message, m);
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

handler.help = ['cerpenhoror'];
handler.tags = ['cerpen'];
handler.command = ['cerpenhoror'];
handler.register = true

export default handler;