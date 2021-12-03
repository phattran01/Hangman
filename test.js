var wordChoices = [];

    var fs = require("fs");
    const makeArrayFromTextFile = (path) => {
    const text = fs.readFileSync(path, 'utf-8')
    const textByLine = text.split('\r\n')
    return textByLine
    }
    var arrayWords = makeArrayFromTextFile('./words_alpha.txt')
    for(var i = 0; i < arrayWords.length; i++) {
        wordChoices.push(arrayWords[i]);
    }

    for(var i = 0; i < wordChoices.length; i++) {
        console.log(wordChoices[i]);
    }