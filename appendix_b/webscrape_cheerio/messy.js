const fs = require('fs');
const html = fs.readFileSync('./messy.html', 'utf-8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

const book = {
    title: $('table tr td a').first().text(),
    href: $('table tr td a').first().attr('href'),
    author: $('table tr td').eq(1).text()
};

console.log(book);