
var numAmount = 9;
var playagainBtn = document.querySelector("#Playagain");
var colorBox = document.querySelectorAll(".ColorBox")
var easyBtn = document.querySelector("#easy");
var normalBtn = document.querySelector("#normal");
var hardBtn = document.querySelector("#hard");
var color = generateRandomColor(numAmount);
var outputH2 = document.querySelector("#outputh2");
var rezultdisplay = document.querySelector("#result")
var header = document.querySelector("header")
var colorpick = pickRandomColor();
var userHeal = document.querySelectorAll(".healt");
var healtCount = 3;
gameON = false;
var userhealtConteiner = document.querySelector(".userhealt")





easyBtn.addEventListener("click", () => {
    numAmount = 3;
    healtCount = 1;
    color = generateRandomColor(numAmount);
    colorpick = pickRandomColor()
    outputH2.textContent = pickRandomColor();
    easyBtn.style.opacity = "1";
    normalBtn.style.opacity = "0.3"
    hardBtn.style.opacity = "0.3"
    ReturnAllHearts();



    for (var i = 0; i < userHeal.length; i++) {
        if (i <= 0) {
            userHeal[i].style.display = "block"
        } else if (i > 0) {
            userHeal[i].style.display = "none"
        }
    }



    for (var i = 0; i < colorBox.length; i++) {

        if (color[i]) {
            colorBox[i].style.background = color[i]
        } else {
            colorBox[i].style.display = "none";
        }
    }


})

normalBtn.addEventListener("click", () => {
    numAmount = 6;


    color = generateRandomColor(numAmount);
    colorpick = pickRandomColor()
    outputH2.textContent = pickRandomColor();
    easyBtn.style.opacity = "0.3"
    hardBtn.style.opacity = "0.3"
    normalBtn.style.opacity = "1";
    healtCount = 2;
    ReturnAllHearts();
    for (var i = 0; i < userHeal.length; i++) {

        if (i <= 1) {
            userHeal[i].style.display = "block"

        } else if (i > 1) {
            userHeal[i].style.display = "none"

        }


    }



    for (var i = 0; i < colorBox.length; i++) {

        if (color[i]) {
            colorBox[i].style.background = color[i]
            colorBox[i].style.display = "block"
        } else {
            colorBox[i].style.display = "none"
        }
    }
})


function BreakHeart(index) {
    var userHeal = document.querySelectorAll(".healt");
    userHeal[index].style.display = "none";
}



hardBtn.addEventListener("click", () => {
    numAmount = 9;

    healtCount = 3;
    color = generateRandomColor(numAmount);
    colorpick = pickRandomColor()
    outputH2.textContent = pickRandomColor();
    easyBtn.style.opacity = "0.3"
    normalBtn.style.opacity = "0.3"
    hardBtn.style.opacity = "1";
    ReturnAllHearts();

    for (var i = 0; i < userHeal.length; i++) {
        if (i > 3) {
            userHeal[i].style.display = "none"
        } else if (i >= 0) {
            userHeal[i].style.display = "block"
        }
    }



    for (var i = 0; i < colorBox.length; i++) {

        if (color[i]) {

            colorBox[i].style.background = color[i]
            colorBox[i].style.display = "block";
        }
    }
})

playagainBtn.addEventListener("click", () => {
    ReturnAllHearts();

    healtCount = 3;
    color = generateRandomColor(numAmount);
    colorpick = pickRandomColor()

    

    rezultdisplay.textContent = "";
    outputH2.textContent = colorpick;
    for (var i = 0; i < colorBox.length; i++) {
        colorBox[i].style.background = color[i];
    }

    header.style.background = "rgba(26, 26, 28,0.3)";
})


outputH2.textContent = colorpick;

for (var i = 0; i < colorBox.length; i++) {

    colorBox[i].style.background = color[i];

    colorBox[i].addEventListener("click", function () {

        var clickedColor = this.style.background;
        if (outputH2.textContent == "..." || healtCount == 0) {
            return;
        }
        if (clickedColor === colorpick) {
            rezultdisplay.textContent = " Good Job!";
            playagainBtn.textContent = " Play Again ?";
            changeColor(clickedColor);
            header.style.background = clickedColor;

        }

        else {
            this.style.background = "black";
            healtCount--;
            BreakHeart(healtCount);
            rezultdisplay.textContent = "Try Again ";

        }

    })
}


function ReturnAllHearts() {
    var userHeal = document.querySelectorAll(".healt");
    for (var i = 0; i < userHeal.length; i++) {
        userHeal[i].style.display = "block";
    }
}
function BreakHeart(index) {
    var userHeal = document.querySelectorAll(".healt")
    userHeal[index].style.display = "none";
}



function changeColor(color) {
    for (var i = 0; i < colorBox.length; i++) {

        colorBox[i].style.background = color
    }
    return
}



function pickRandomColor() {
    var rand = Math.round(Math.random() * color.length);
    return color[rand];
}





function generateRandomColor() {
    var mass = [];
    for (var i = 0; i < numAmount; i++) {


        mass.push(randomColor())
    }

    return mass;
}




function randomColor() {

    var r = Math.round(Math.random() * 255)
    var g = Math.round(Math.random() * 255)
    var b = Math.round(Math.random() * 255)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}