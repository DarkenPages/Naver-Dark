let cssPurge = require('css-purge');

const uncompressedFilePath = 'Naver Dark.verbose.user.css';
const compressedFilePath = 'Naver Dark.user.css';

let fs = require('fs');
console.log("Reading uncompressed User Style...");
let contents = fs.readFileSync(uncompressedFilePath, 'utf8');

function fetchUserStyleProperties(contents) {
    const start = "/* ==UserStyle==";
    const end = "==/UserStyle== */";

    let begin = contents.indexOf(start);
    let finish = contents.indexOf(end);

    let properties = '';
    for(let i = begin; i < finish + end.length; i++) {
        properties += contents[i];
    }
    return {
        properties: properties,
        lastIndex: finish + end.length
    }
}

let { properties, lastIndex } = fetchUserStyleProperties(contents);
let remaining = contents.substring(lastIndex, contents.length);

cssPurge.purgeCSS(remaining, {
    trim: true,
    shorten: true,
    format: true,
    verbose: false
}, function(error, result) {
    if(error) {
        console.log(error);
    } else {
        if(fs.existsSync(compressedFilePath)) {
            console.log("Deleting previous User Style file...");
            fs.unlinkSync(compressedFilePath);
        }

        console.log("Creating compressed User Style file...");
        fs.appendFileSync(compressedFilePath, properties + '\n' + result, 'utf8');
    }
});