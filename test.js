import FuzzySet from 'fuzzyset.mjs'

function testing() {
                const fs = new FuzzySet();
                var ar = ['a','aa','aaa','aah','aahed','aahing','aahs','aal','aalii','aaliis','aals','aam','aani','aardvark','aardvarks','aardwolf','aardwolves','aargh','aaron','aaronic','aaronical','aaronite','aaronitic'];
                var x = "ah";

                for ( var i = 0; i < ar.length; i++) {
                    fs.add(ar[i])
                }
                result = fs.get(x);
                document.getElementById("testP").innerHTML = result;
            }

