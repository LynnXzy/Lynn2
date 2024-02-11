import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    conn.reply(m.chat, 'Sedang diproses, mohon tunggu...', m);
    m.react('⌛');
    const apiEndpoint = `https://rzky.my.id/api/anime/nekopoi/latest?apikey=${rzky}`;

    const get = await fetch(apiEndpoint);
    const js = await get.json();

    if (Array.isArray(js.result) && js.result.length > 0) {
      const profiles = js.result;
      let message = '';

      for (const profile of profiles) {
        const {
          title,
          upload,
          image,
          link
        } = profile;

        message += `❏ Title : ${title}\n❏ Upload : ${upload}\n❏ Link : ${link}\n\n`;
      }

      await conn.sendFile(m.chat, profiles[0].image, null, message, m);
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

handler.help = ['nekopoilatest'];
handler.tags = ['anime'];
handler.command = ['nekopoilatest'];
handler.register = true

export default handler;