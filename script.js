//$(".btn").css("color","red");

//$("h1").text("bye")
var lvlName = 0;

var userClicks = [];

var correctClicks = [];

var started = false;

$(document).keypress(function(event){
    if(document.querySelector("h1").textContent === "Press A Key to Start" || document.querySelector("h1").textContent === "Game Over, Press Any Key to Restart"){
        //$("h1").text("Level " + lvlName);
        //startGame();
        started = true;
        animateSeq();
    }
})

function warning(){
    $(".l-container").addClass('warning');
        $("body").addClass('warning');
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $(".l-container").removeClass('warning');
            $("body").removeClass('warning');
            // let audio = new Audio(fileName)
            // audio.play();
        }, 100);
        let audio = new Audio("./sounds/wrong.mp3")
        audio.play();
}

$(".btn").click(function(event){
    //var btnName = this.style.backgroundColor.text;
    //const div = event.target;
    //const backgroundColor = getComputedStyle(div).backgroundColor;
    //const backgroundColor = getComputedStyle(event.target).backgroundColor;
    if(document.querySelector("h1").textContent === "Press A Key to Start" || document.querySelector("h1").textContent === "Game Over, Press Any Key to Restart"){
        // $(".l-container").addClass('warning');
        // $("body").addClass('warning');
        // $("h1").text("Game Over, Press Any Key to Restart");
        // setTimeout(function(){
        //     $(".l-container").removeClass('warning');
        //     $("body").removeClass('warning');
        //     // let audio = new Audio(fileName)
        //     // audio.play();
        // }, 100);
        // let audio = new Audio("./sounds/wrong.mp3")
        // audio.play();
        warning();
    }
    let fileName;
    let btnName;
    switch(getComputedStyle(event.target).backgroundColor){
        case "rgb(0, 128, 0)":
            btnName = ".green";
            fileName = "./sounds/green.mp3";
            //userClicks.push("green");
            break;
        case "rgb(255, 0, 0)":
            btnName = ".red";
            fileName = "./sounds/red.mp3";
            //userClicks.push("red");
            break;
        case "rgb(255, 255, 0)":
            btnName = ".yellow";
            fileName = "./sounds/yellow.mp3";
            //userClicks.push("yellow");
            break;
        case "rgb(0, 0, 255)":
            btnName = ".blue";
            fileName = "./sounds/blue.mp3";
            //userClicks.push("blue");
            break;
    }

    //$("h1").text(btnName);
    $(btnName).addClass('pressed');

    setTimeout(function(){
        $(btnName).removeClass('pressed');
        // let audio = new Audio(fileName)
        // audio.play();
    }, 100);

    let audio = new Audio(fileName)
    audio.play();
    //alert(backgroundColor);

    if(started === true){
        userClicks.push($(this).attr("id"));
        console.log(userClicks);

        //checkClick(userClicks[userClicks.length - 1]);
        checkClick(userClicks.length - 1);
    }

});

//const observer = new MutationObserver(startGame);

// Configuration options for the observer
//const config = { characterData: true, subtree: true };

//observer.observe(document.querySelector("h1"), config);

function startGame() {
    //console.log("The text has changed!");
    // Add your custom code here
    if(document.querySelector("h1").textContent === "Level 1"){
        //$(".green").css("color","red");
        //$("h1").text("bye");
        let level = 1;
        let correctClicks = [];
        let seq;
        
        // while(true){
        //     userClicks = [];
        //     // setTimeout(() => {
        //     //     console.log("catsi");
        //     // }, 1500);
        //     //seq = generateSequence();
        //     //correctClicks.push(seq);
        //     //let colorClass = correctClicks[correctClicks.length - 1];
        //     //flashCard(colorClass);

        //     //let userClicks = [];

        //     // for(var i = 0; i < correctClicks.length; i++){
        //     //     while(userClicks.length === 0){

        //     //     }
        //     //     if(correctClicks[i] !== userClicks[0]){
        //     //         warning();
        //     //         break;
        //     //     }
        //     //     // else{
                    
        //     //     // }
        //     //     userClicks = [];
        //     // }

        //     // level = level + 1;
        //     // $("h1").text("Level " + level);

        //   if(userClicks.length !== 0){
        //     break;
        //   }
            
        // }

        level = level + 1;
        $("h1").text("Level " + level);

    }
  }


  function checkClick(num){
    if(userClicks[num] === correctClicks[num]){
        console.log(num);
        console.log("User clicks in checkClick function: " + userClicks);
        console.log("Correct clicks in checkClick function: " + correctClicks);
        console.log("User clicks at num" + userClicks[num]);
        console.log("Correct clicks at num: " + correctClicks[num]);
        if(userClicks.length === correctClicks.length){
            setTimeout(function () {
                animateSeq();
              }, 1000);
        }
        //userClicks = [];
    }
    else{
        correctClicks = [];
        userClicks = [];
        lvlName = 0;
        started = false;
        warning();
    }
  }

  function animateSeq(){
    userClicks = [];
    lvlName++;
    $("h1").text("Level " + lvlName);

    var next = generateSequence();
    correctClicks.push(next);

    $("#" + next).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio = new Audio("./sounds/" + next + ".mp3");
    audio.play();

  }


  function generateSequence(){
    let colors = ['green', 'red', 'yellow', 'blue'];
    //let arr = [];
    let val;
    // for(var i = 0; i < level; i++){
    //     let num = Math.floor(Math.random() * 4);
    //     arr.push(colors[num]);
    // }
    val = colors[Math.floor(Math.random() * 4)];
    return val;
  }


  function flashCard(color){
    $(color).addClass('hide');

    setTimeout(() => {
        $("." + color).removeClass('hide');
        let audio = new Audio("./sounds/" + color + ".mp3");
        audio.play();
    }, 100);
  }
  //$(".green").css("color","black");