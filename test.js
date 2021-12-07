const FuzzySet = require('fuzzyset')


function bruh() {

    const fs = FuzzySet();
var ar = ['a','aa','aaa','aah','aahed','aahing','aahs','aal','aalii','aaliis','aals','aam','aani','aardvark','aardvarks','aardwolf','aardwolves','aargh','aaron','aaronic','aaronical','aaronite','aaronitic'];
var x = "ah";

for ( var i = 0; i < ar.length; i++) {
    fs.add(ar[i])
}

document.getElementById("fuck").innerHTML = (String(fs.get(x)));
}


