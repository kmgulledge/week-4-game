// Begin White Belt Javascript / Jquery Code

// Selects a random number between 19 - 120 to be shown at the start of the game
$( document ).ready(function(){
  var Random=Math.floor(Math.random() * 120)

// Puts the random number to the HTML 
$("#randomNumber").text(Random);
  
// Setting up random numbers for each jewel between 1 - 12
var num1= Math.floor(Math.random() * 12)
var num2= Math.floor(Math.random() * 12)
var num3= Math.floor(Math.random() * 12)
var num4= Math.floor(Math.random() * 12)
  
//  Variables
var userTotal= 0; 
var wins= 0;
var losses = 0;
  
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

// Resets the game
function reset(){
  Random=Math.floor(Math.random() * 120);
  console.log(Random);
$("#randomNumber").text(Random);
  num1= Math.floor(Math.random() * 12);
  num2= Math.floor(Math.random() * 12);
  num3= Math.floor(Math.random() * 12);
  num4= Math.floor(Math.random() * 12);
  userTotal= 0;
$("#finalTotal").text(userTotal);
} 

// Adds the win to the Total
function win(){
  alert("You won all the droids!");
  wins++; 
  $("#numberWins").text(wins);
  reset();
}

// Adds the loss to the Total
function loser(){
  alert ("Oh no, you lost all your droids!");
  losses++;
  $("#numberLosses").text(losses);
  reset()
}

// Sets up click for droids
$("#one").on ("click", function(){
  userTotal = userTotal + num1;
  console.log("New userTotal= " + userTotal);
$("#finalTotal").text(userTotal); 
         
  // Sets win/lose 
  if (userTotal == Random){
      win();
} else if ( userTotal > Random){
      loser();
  }   
}) 

$("#two").on ("click", function(){
  userTotal = userTotal + num2;
  console.log("New userTotal= " + userTotal);
$("#finalTotal").text(userTotal); 
   if (userTotal == Random){
        win();
} else if ( userTotal > Random){
          loser();
  } 
})  
  
$("#three").on ("click", function(){
  userTotal = userTotal + num3;
  console.log("New userTotal= " + userTotal);
$("#finalTotal").text(userTotal);

// Sets win/lose 
  if (userTotal == Random){
        win();
} else if ( userTotal > Random){
          loser();
  } 
})  
  
$("#four").on ("click", function(){
  userTotal = userTotal + num4;
  console.log("New userTotal= " + userTotal);
$("#finalTotal").text(userTotal); 
      
  if (userTotal == Random){
      win();
} else if ( userTotal > Random){
          loser();
    }
  });   
}); 
