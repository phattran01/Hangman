
function bruteForce() {
    word1 = String(pickedWord)
    document.getElementById("bruteForceAlgo").innerHTML = "Brute Force: " + MyArray.includes(pickedWord);
}

function decreaseConstantFactor() {
    var arr = MyArray;
    var x = String(pickedWord);

    let result = binarySearch(arr, x);

    if (result == -1) {
        document.getElementById("decreaseByConstantFactorAlgo").innerHTML = "Decrease By Constant Factor: false";
    } else {
        document.getElementById("decreaseByConstantFactorAlgo").innerHTML = "Decrease By Constant Factor: true";
    }
}

function binarySearch(arr, x) {
    let l = 0, r = arr.length - 1;
        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
       
            let res = x.localeCompare(arr[m]);
                   
            // Check if x is present at mid
            if (res == 0)
                return m;
       
            // If x greater, ignore left half
            if (res > 0)
                l = m + 1;
       
            // If x is smaller, ignore right half
            else
                r = m - 1;
            }
            return -1;
}
