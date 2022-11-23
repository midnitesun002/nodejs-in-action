const Watcher = require('./watcher');
const fs = require('fs');

const watchDir = './watch';
const processedDir = './processed';
const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', (file) => {
    const watchFile = `${watchDir}/${file}`;
    const processedFile = `${processedDir}/${file.toLowerCase()}`;
    console.log(`Processing file: ${watchFile} -> ${processedFile}`);
    fs.rename(watchFile, processedFile, (err) => {
        if (err) throw err;
    });
});

watcher.start();