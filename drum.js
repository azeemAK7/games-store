
var buttonLength = document.querySelectorAll("button").length;

for(var i =0;i<buttonLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonClick = this.innerHTML;
        handleClick(buttonClick);
        buttonAnimation(buttonClick);
    });
}

//this is for input from keyboard

document.addEventListener("keydown", function(Event){
    handleClick(Event.key);
    buttonAnimation(Event.key);
})

function handleClick(key){

    switch (key){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("./sounds/g_sub.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("./sounds/cymbal-crash-4.mp3");
            audio.play();
            break;
        case "n":
            var audio = new Audio("./sounds/cymbal-crash-7.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "x":
            var audio = new Audio("./sounds/drumloopacoustickit.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("./sounds/triangle_open_01.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("./sounds/synth-cowbell-high.mp3");
            audio.play();
            break;
    }
    }


    function buttonAnimation(keyPressed){

        var animation = document.querySelector("." + keyPressed);
        animation.classList.add("pressed");

        setTimeout(function(){
            animation.classList.remove("pressed");
        } , 200)
    }

