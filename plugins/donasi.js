let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*GOPAY*_✅ : 
║│- 089516207932
║│
║│➸ _*OVO*_✅ : 
║│- 089516207932
║│
║│➸ _*DANA*_✅ : 
║│- 089516207932
║│
║│➸ _*PULSA*_✅: 
║│- 089516207932
║│
║│➸ _*OWNER*_
║│- wa.me/6289516207932
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
