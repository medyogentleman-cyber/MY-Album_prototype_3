const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom'); // We might not have jsdom. Let's use regex instead.

const dir = __dirname;
let htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

// Extract dictionary from i18n.js
const i18nContent = fs.readFileSync(path.join(dir, 'i18n.js'), 'utf8');
const dictMatch = i18nContent.match(/const i18nData = (\{[\s\S]*?\n\};)/);
let dictionary = {};
if (dictMatch) {
    try {
        const i18nData = eval('(' + dictMatch[1] + ')');
        dictionary = i18nData['en'] || {};
    } catch(e) {
        console.error("Failed to parse dictionary", e);
    }
}

// Regex to find Japanese characters
const hasJapaneseRe = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/;

let missingKeys = new Set();
let count = 0;

for (let file of htmlFiles) {
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    // Simplified tag stripping to find text content
    // This is rough without a DOM parser, but we'll try to find text between > and <
    let texts = html.match(/>([^<]+)</g);
    if (texts) {
        texts.forEach(t => {
            let clean = t.replace(/^>/, '').replace(/<$/, '').trim();
            if (clean && hasJapaneseRe.test(clean)) {
                if (!dictionary[clean]) {
                    // Check if it's handled by rules (like 受取日: )
                    if (clean.startsWith('受取日: ') || clean.startsWith('共有元: ') || clean.startsWith('申請日: ') || clean.startsWith('掲載日：') || clean.startsWith('更新: ') || clean.startsWith('年間データ転送量上限: ')) {
                        // Handled by dynamic prefix
                    } else if (clean.endsWith('件選択中')) {
                        // Handled by dynamic suffix
                    } else {
                        missingKeys.add(clean);
                    }
                }
            } else if (clean === '/ 月' || clean === '/ 年') {
                 if (!dictionary[clean]) missingKeys.add(clean);
            }
        });
    }
}

console.log("MISSING TRANSLATIONS:");
Array.from(missingKeys).forEach(k => console.log(k));
fs.writeFileSync('missing_i18n.txt', Array.from(missingKeys).join('\n'), 'utf8');
console.log(`\nFound ${missingKeys.size} missing translations.`);
