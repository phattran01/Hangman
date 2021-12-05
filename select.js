var pickedWord = sessionStorage.getItem("pickedWord");

function myFunction() {
  x = document.getElementById("WORD").value;
  document.getElementById("wordChosen").innerHTML = "The word written: " + x;
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem("pickedWord", x);
  }
}

