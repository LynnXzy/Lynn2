let handler = async (m, { conn, command, text, usedPrefix }) => {
    m.react('❌') 
    if (!text) return m.reply (`🚩 *Contoh:* ${usedPrefix + command} heavycraft`)
      const dates = new Date(); 
      const timestamp = dates.getTime();     
      const date = new Date(timestamp);
      const hour = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const formattedTime = hour + ":" + minutes + ":" + seconds;
   await conn.reply(m.chat, wait, m)
   m.react('⌛') 
      try {
        if (command == 'horror') {
          const res = `https://rzky.my.id/api/ephoto/horror?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'sunlight') {
          const res = `https://rzky.my.id/api/ephoto/sunlight?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'cake') {
          const res = `https://rzky.my.id/api/ephoto/cake?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'pig') {
          const res = `https://rzky.my.id/api/ephoto/pig?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'hallowen') {
          const res = `https://rzky.my.id/api/ephoto/hallowen?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
         if (command == 'leafgraphy') {
          const res = `https://rzky.my.id/api/ephoto/leafgraphy?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
         if (command == 'water') {
          const res = `https://rzky.my.id/api/ephoto/water?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
         if (command == 'writestatus') {
          const res = `https://rzky.my.id/api/ephoto/writestatus?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'heated') {
          const res = `https://rzky.my.id/api/ephoto/heated?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'buoys') {
          const res = `https://rzky.my.id/api/ephoto/buoys?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'crank') {
          const res = `https://rzky.my.id/api/ephoto/crank?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.gif', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'puppy') {
          const res = `https://rzky.my.id/api/ephoto/puppy?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.gif', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'pubgavatar') {
          const res = `https://rzky.my.id/api/ephoto/pubgavatar?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.gif', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'foggy') {
          const res = `https://rzky.my.id/api/ephoto/foggy?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'diary') {
          const res = `https://rzky.my.id/api/ephoto/diary?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'artistic') {
          const res = `https://rzky.my.id/api/ephoto/artistic?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'tiger') {
          const res = `https://rzky.my.id/api/ephoto/tiger?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.gif', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'american') {
          const res = `https://rzky.my.id/api/ephoto/american?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'pencil') {
          const res = `https://rzky.my.id/api/ephoto/cloud?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'arrow') {
          const res = `https://rzky.my.id/api/ephoto/arrow?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'arrow2') {
          const res = `https://rzky.my.id/api/ephoto/arrow2?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'anonymous') {
          const res = `https://rzky.my.id/api/ephoto/anonymous?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'aov') {
          const res = `https://rzky.my.id/api/ephoto/aov?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'ml') {
          const res = `https://rzky.my.id/api/ephoto/ml?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'warface') {
          const res = `https://rzky.my.id/api/ephoto/warface?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'crank') {
          const res = `https://rzky.my.id/api/ephoto/crank?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'puppy') {
          const res = `https://rzky.my.id/api/ephoto/puppy?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
        }
        if (command == 'pubgavatar') {
          const res = `https://rzky.my.id/api/ephoto/pubgavatar?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'foggy') {
          const res = `https://rzky.my.id/api/ephoto/foggy?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'tiger') {
          const res = `https://rzky.my.id/api/ephoto/tiger?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'american') {
          const res = `https://rzky.my.id/api/ephoto/american?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'arrow') {
          const res = `https://rzky.my.id/api/ephoto/arrow?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'arrow2') {
          const res = `https://rzky.my.id/api/ephoto/arrow2?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'anonymous') {
          const res = `https://rzky.my.id/api/ephoto/anonymous?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'aov') {
          const res = `https://rzky.my.id/api/ephoto/aov?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'valorant') {
          const res = `https://rzky.my.id/api/ephoto/valorant?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'warface') {
          const res = `https://rzky.my.id/api/ephoto/warface?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'ml') {
          const res = `https://rzky.my.id/api/ephoto/ml?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
        }
        if (command == 'freefire') {
          const res = `https://rzky.my.id/api/ephoto/freefire?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'freefire2') {
          const res = `https://rzky.my.id/api/ephoto/freefire2?text=${encodeURIComponent(text)}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'wood') {
          const res = `https://rzky.my.id/api/ephoto/wood?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'television') {
          const res = `https://rzky.my.id/api/ephoto/television?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'glasses') {
          const res = `https://rzky.my.id/api/ephoto/glasses?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'blackpink') {
          const res = `https://rzky.my.id/api/ephoto/blackpink?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'neonbp') {
          const res = `https://rzky.my.id/api/ephoto/neonbp?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'coverpubg') {
          const res = `https://rzky.my.id/api/ephoto/coverpubg?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'greenbrush') {
          const res = `https://rzky.my.id/api/ephoto/greenbrush?text=${encodeURIComponent(text)}&text2=${formattedTime}&&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'quotestatus') {
          const res = `https://rzky.my.id/api/ephoto/quotestatus?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'neonblue') {
          const res = `https://rzky.my.id/api/ephoto/neonblue?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'eraser') {
          const res = `https://rzky.my.id/api/ephoto/eraser?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'dragonfire') {
          const res = `https://rzky.my.id/api/ephoto/dragonfire?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'incandescent') {
          const res = `https://rzky.my.id/api/ephoto/incandescent?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'typography') {
          const res = `https://rzky.my.id/api/ephoto/typography?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'letters') {
          const res = `https://rzky.my.id/api/ephoto/letters?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'cloth') {
          const res = `https://rzky.my.id/api/ephoto/cloth?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'graffiti') {
          const res = `https://rzky.my.id/api/ephoto/graffiti?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'metals') {
          const res = `https://rzky.my.id/api/ephoto/metals?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'typography2') {
          const res = `https://rzky.my.id/api/ephoto/typography2?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'nightstars') {
          const res = `https://rzky.my.id/api/ephoto/nightstars?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'cloud') {
          const res = `https://rzky.my.id/api/ephoto/cloud?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
        if (command == 'caper') {
          const res = `https://rzky.my.id/api/ephoto/caper?text=${encodeURIComponent(text)}&text2=${formattedTime}&apikey=${rzky}`;
          await conn.sendFile(m.chat, res, 'ephoto.jpeg', 'Nih kak sudah jadi!', m);
          m.react('✅') 
        }
       } catch (err) {
      console.error(err)
      m.reply ('🚩 Sedang error!')
     m.react('❌') 
       };
    };
    handler.command = handler.help = ['horror', 'sunlight', 'cake', 'puppy', 'crank', 'pubgavatar', 'foggy', 'diary', 'artistic', 'tiger', 'american', 'pencil', 'arrow', 'arrow2', 'aov', 'valorant', 'warface', 'ml', 'freefire', 'freefire2', 'wood', 'television', 'glasses', 'blackpink', 'neonbp', 'coverpubg', 'greenbrush', 'quotestatus', 'neonblue', 'eraser', 'dragonfire', 'incandescent', 'typography', 'letters', 'cloth', 'graffiti', 'metals', 'typography2', 'nightstars', 'cloud', 'caper', 'anonymous', 'buoys', 'heated', 'water', 'writestatus', 'leafgraphy', 'hallowen']
    handler.tags = ['ephoto'];
    handler.premium = false;
    handler.group = false;
    handler.register = true
    
    export default handler;