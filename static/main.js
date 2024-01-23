//--------------------------------------------------------------------
//-- Tá olhando pq?                                                 --
//--------------------------------------------------------------------

console.log('Seu computador está sendo hackeado...');
console.log('Brincadeira')
// Virtual Gallery

// Change Text
const texts = [
    "Freelancer",
    "Programmer",
    "Web Designer",
    "Game Designer",
    "Artist 3D"
];

var randomText = document.getElementById("randomText");
var i = 0

function changeText(){
    randomText.textContent = texts[i];
    i = (i + 1) % texts.length;
}

changeText();

setInterval(changeText, 2000)