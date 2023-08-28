
//window.postMessage("addCoins", "*")

setTimeout(function() {
    document.getElementById("BGM").play()
}, 10)

setInterval(function() {
    let numElement = document.getElementById("Count");
    let numValue = Number(numElement.textContent) + 1;
    numElement.textContent = numValue;
}, 1000);

let GameStarted = false;
let TimeMultiplier = 1
var Looping = false

let Delay = false
let GV = document.getElementById("Gold")




const savedGOLV = localStorage.getItem("GOLV");
if (savedGOLV === null || isNaN(savedGOLV)) {
    GV.textContent = "0";
}
GV.textContent = localStorage.getItem("GOLV")
window.addEventListener("beforeunload", function() {
    localStorage.setItem("GOLV", GV.textContent);
});
function BSP() {

       Looping = true
    //GameStarted = true

    let INAME = document.getElementById("Time")
    let TN = 10

    INAME.textContent = TN * TimeMultiplier

    let ITV = setInterval(function() {
        if (Looping === true && GameStarted === true && Number(INAME.textContent) >= 0.01 /*&&typeof ITV != "undefined"*/) {
             
            let NTN = Number(INAME.textContent) - 0.01
            INAME.textContent = NTN.toFixed(2)
            INAME.textContent = NTN
            INAME.textContent = NTN.toFixed(2)
           

            
        }else if (Looping === true && GameStarted === true && Number(INAME.textContent) <= 0.01 || Number(INAME.textContent) == 0.01 ) {
            console.log("FAILED")

            let NGV = Math.floor(Number(GV.textContent) + Number(document.getElementById("Score").textContent) / 3)

            console.log(NGV , GV.textContent )

            GV.textContent = NGV

            if (newB && newB.parentNode) {
                newB.parentNode.removeChild(newB)
            }
            INAME.textContent = 0
            document.getElementById("Score").textContent = "0"
            window.alert("Sorry You Lost With A Grand Score Of " + document.getElementById("Score").textContent)

            Looping = false
            GameStarted = false

            

            document.getElementById("Coins").play()
            localStorage.setItem("GOLV",NGV)
            clearInterval(ITV)

        }
    }, 10)

    //ITV()

    var newB = document.createElement("button")

newB.className = "generated-button";

document.getElementById("Container").appendChild(newB)

newB.onclick = function() {
    clearInterval(ITV)

    

    let LT = document.getElementById("Score");
    let LN = Number(LT.textContent) + 1
    
    let OV = Number(LT.textContent)

    

    LT.textContent = LN

    if (LN % 10 === 0 && TimeMultiplier != 0.05) {
        TimeMultiplier -=0.025
    }

    BSP()

    newB.remove()

}

let randomx = window.innerWidth/2 + Math.random() * (600 - (-600))-600
let randomy = 450  - Math.random() * (450-(0))-0

newB.style.position = "absolute";
newB.style.height = 5 + "cm"
newB.style.width = 5 + "cm"
newB.style.borderRadius = 50 + "%"


function Pos() {
if (randomx < 600 && randomx > -600 || randomy < 551 && randomy > -1) {
    newB.style.marginTop = randomy + "px";
   newB.style.marginLeft = randomx + "px";
   console.log(randomx," and ",randomy)
   
   }else {
    randomx = window.innerWidth/2 + Math.random() * (400 - (-400))-400
    randomy = 450  - Math.random() * (450-(0))-0
    Pos()
   }
   
}
Pos()
}
document.body.style.backgroundImage = "url('BG IMAGE.png')"
document.body.style.width = 100 + "%"
document.body.style.height = 100 + "vh"

document.getElementById("SpB").onclick = function() {
   if (GameStarted === false && Delay === false) {
    Delay = true
    BSP()
    GameStarted = true
   }else{

   }
/*
   let Sheet = document.styleSheets.appendChild(newB)
   Sheet.
*/
}

function addCoin(amount) {
    let NGV = Number(GV.textContent) + amount
    GV.textContent = NGV
}

function listenForConsoleCommands() {
    console.log("Type 'addCoins(amount)' to add coins.");
    window.addEventListener("message", function(event) {
        if (event.data === "addCoins") {
            addCoin(100); 
        }
    });
}

listenForConsoleCommands();
