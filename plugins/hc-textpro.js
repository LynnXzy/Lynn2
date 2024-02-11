let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) return m.reply (`🚩 *Contoh:* ${usedPrefix + command} heavycraft`)
    const dates = new Date(); 
    const timestamp = dates.getTime();     
    const date = new Date(timestamp);
    const hour = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedTime = hour + ":" + minutes + ":" + seconds;
 await conn.reply(m.chat, wait, m)
    try {
      if (command == 'paper') {
        const res = `https://rzky.my.id/api/textpro/paper?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'embossed') {
        const res = `https://rzky.my.id/api/textpro/embossed?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'broken') {
        const res = `https://rzky.my.id/api/textpro/broken?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'blackpink') {
        const res = `https://rzky.my.id/api/textpro/blackpink?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'carbon') {
        const res = `https://rzky.my.id/api/textpro/carbon?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
       if (command == 'gradient') {
        const res = `https://rzky.my.id/api/textpro/gradient?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
       if (command == 'glue') {
        const res = `https://rzky.my.id/api/textpro/glue?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
       if (command == 'neon') {
        const res = `https://rzky.my.id/api/textpro/neon?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'blood') {
        const res = `https://rzky.my.id/api/textpro/blood?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'firework') {
        const res = `https://rzky.my.id/api/textpro/firework?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'dropwater') {
        const res = `https://rzky.my.id/api/textpro/dropwater?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'imglitch') {
        const res = `https://rzky.my.id/api/textpro/imglitch?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'glossy') {
        const res = `https://rzky.my.id/api/textpro/glossy?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'bear') {
        const res = `https://rzky.my.id/api/textpro/bear?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'devil') {
        const res = `https://rzky.my.id/api/textpro/devil?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'christmas') {
        const res = `https://rzky.my.id/api/textpro/christmas?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'magma') {
        const res = `https://rzky.my.id/api/textpro/magma?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'stone') {
        const res = `https://rzky.my.id/api/textpro/stone?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'light') {
        const res = `https://rzky.my.id/api/textpro/light?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'berry') {
        const res = `https://rzky.my.id/api/textpro/berry?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'transformer') {
        const res = `https://rzky.my.id/api/textpro/transformer?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'fiction') {
        const res = `https://rzky.my.id/api/textpro/fiction?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'greenhorror') {
        const res = `https://rzky.my.id/api/textpro/greenhorror?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'metallic') {
        const res = `https://rzky.my.id/api/textpro/metallic?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'discovery') {
        const res = `https://rzky.my.id/api/textpro/discovery?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'circuit') {
        const res = `https://rzky.my.id/api/textpro/circuit?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'sketch') {
        const res = `https://rzky.my.id/api/textpro/sketch?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'choror') {
        const res = `https://rzky.my.id/api/textpro/choror?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'skeleton') {
        const res = `https://rzky.my.id/api/textpro/skeleton?text=${encodeURIComponent(text)}&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
      if (command == 'layered') {
        const res = `https://rzky.my.id/api/textpro/layered?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
        await conn.sendFile(m.chat, res, 'textpro.jpeg', 'Nih kak sudah jadi!', m);
      }
     } catch (err) {
    console.error(err)
    m.reply ('🚩 Sedang error!')
     };
  };
  handler.command = handler.help = ['paper','layered','embossed','broken','blackpink','carbon','gradient','glue','neon','blood','firework','dropwater','imglitch','glossy','bear','devil','christmas','magma','stone','light','berry','transformer','fiction','greenhorror','metallic','discovery','circuit','sketch','choror','skeleton']
  handler.tags = ['textpro'];
  handler.premium = false;
  handler.group = false;
  handler.register = true
  
  export default handler;