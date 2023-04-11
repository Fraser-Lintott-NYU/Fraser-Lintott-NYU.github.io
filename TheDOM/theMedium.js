const myButton = document.getElementById("bunton")
const myButton2 = document.getElementById("bumtom")
const myButton3 = document.getElementById("buton")


let theMain = document.getElementById('theMessage')
let randomColor

myButton.addEventListener('click', randomizeColorMain)
myButton2.addEventListener('click', randomizeColorWhole)
myButton3.addEventListener('click', epilepsyMode)

function randomizeColorMain(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    theMain.style.backgroundColor = "#" + randomColor
}

function randomizeColorWhole(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("bigBody").style.backgroundColor = "#" + randomColor
}

function epilepsyMode(){
        randomizeColorMain()
        randomizeColorWhole() 
}

