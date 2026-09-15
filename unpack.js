const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('theme_files.json', 'utf8'));

for (const [filename, content] of Object.entries(data)) {
    let folder = '';
    if (filename.endsWith('.twig')) folder = 'html';
    else if (filename.endsWith('.css')) folder = 'css';
    else if (filename.endsWith('.js')) folder = 'js';
    
    if (folder) {
        const dir = path.join(__dirname, folder);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        
        fs.writeFileSync(path.join(dir, filename), content, 'utf8');
        console.log(`Saved: ${folder}/${filename}`);
    }
}
console.log('All files extracted successfully!');
