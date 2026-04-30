const fs = require('fs');

const repairUtf8 = (str) => {
  // If it's double utf8 encoded, we decode it.
  try {
    return decodeURIComponent(escape(str));
  } catch (e) {
    return str;
  }
};

const file = 'src/app/page.tsx';
let txt = fs.readFileSync(file, 'utf8');

const map = {
  'Ã§': 'ç', 'Ã‡': 'Ç', 'ÄŸ': 'ð', 'Äz': '', 'Ä±': 'ý', 'Ä°': '',
  'Ã¶': 'ö', 'Ã–': 'Ö', 'ÅŸ': 'þ', 'Åz': 'Þ', 'Ã¼': 'ü', 'Ãœ': 'Ü'
};

// Just in case map doesn't trigger due to file encoding issue:
txt = repairUtf8(txt);

txt = txt.replace(/bg-gradient-to-br/g, 'bg-linear-to-br');
txt = txt.replace(/bg-gradient-to-b/g, 'bg-linear-to-b');
txt = txt.replace(/h-\[2px\]/g, 'h-0.5');

fs.writeFileSync(file, txt, 'utf8');
console.log('Fixed!');
