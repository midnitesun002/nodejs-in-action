#!/usr/bin/env node
const concat = require('mississippi').concat;
const readFile = require('fs').readFile;
const yargs = require('yargs');
const argv = yargs
    .demand('f')
    .nargs('f', 1)
    .describe('f', 'JSON file to parse')
    .usage('parse-json [options]')
    .help('h')
    .alias('h', 'help')
    .argv;
const file = argv.f;

function parse(str) {
    const value = JSON.parse(str);
    console.log(JSON.stringify(value));
}

if (file === '-') {
    process.stdin.pipe(concat(parse));
} else {
    readFile(file, (err, data) => {
        if (err) throw err;
        parse(data.toString());
    });
}