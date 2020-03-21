$(document).ready( function() {

    //This code will run after your page loads

    $(".yeti").mousedown(function() {
       // event.target.setAttribute('class',"yeti active");
        endGame();
//        alert("Yaaaarrrr!");
    });
    
    $(".penguin").click(function(event){
        clickPenguin();
        
    });
});



let index=0;
let highScore=0;


function shuffle(array) {
    
    console.log("size "+array.length);
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
console.log("array is "+array.length);
  return array;
}


function shufflePenguins(){
    $("#gameholder").each(function(){
        var divs=[];
         divs = $(this).find('div');

        for(var i = 0; i < divs.length; i++) 
            (divs[i]).remove(); 
        
        //calling a function for sorting
        divs=shuffle(divs);
        
        for(var i = 0; i < divs.length; i++) 
//            divs[i].appendTo(this.val());
            $(divs[i]).appendTo(this);
        
        });
}
                          

function clickPenguin(){
    //add the class
//    console.log(event.target.getAttribute("class"));
    // to avoid reselecting and multiple count on single penguin 
    if ("penguin"==event.target.getAttribute("class") || "penguin inactive"==event.target.getAttribute("class")){
    event.target.setAttribute('class',"penguin active");
    //add 1 to score
    index++;
    }
    //put score into box
    document.getElementById("score").innerHTML=index;
}

function endGame(){
    var endSound=document.getElementById("myAudio");
    endSound.play();
    
    if (index>highScore)
        highScore=index;
    else
        highScore=highScore;
    
    document.getElementById("highscore").innerHTML=highScore;
    
    alert('Game Over \nYour score is '+index);
    //for  each penguin div, set class back to penguin
    for (let a=0; a<index;a++ ){
    document.getElementsByClassName('active')[0].setAttribute('class',"penguin inactive");
    }
    //reset score
    index=0;
    //put score into box;
    document.getElementById("score").innerHTML=index;
    //shuffle penguin
    shufflePenguins();
}