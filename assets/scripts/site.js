//variable that's used for the player's choice

var player = "";


//computer picks a random choice of rock, paper, scissors


function determineWinner (x) {
	var textArray = [
	"rock",
	"paper",
	"scissors"
]
var randomIndex = Math.floor(Math.random() * textArray.length); 
var computer = textArray[randomIndex];

console.log(computer);

if (((player == "rock") && (computer == "scissors")) ||
		((player == "scissors") && (computer == "paper")) ||
		((player == "paper") && (computer == "rock")))
{
	var winner = "You Won!!";
}

else if 
	(player == computer) {
	var winner = "We tied...";
}
else {
	var winner = "I won!!";
}

console.log(winner);

var choices = ("You picked " + player + " and I picked " + computer + ".")

//print the choices to the screen
$('h2').html(choices);
//print the winner to the screen
$('h1').html(winner);
}

//player clicks one of the pictures to choose

$('#rock').click(function(){
	player = $(this).attr("id");
	determineWinner(player);
//console.log(player)
});

$('#paper').click(function(){
	player = $(this).attr("id");
	determineWinner(player);

//	console.log(player)
});

$('#scissors').click(function(){
	player = $(this).attr("id");
	determineWinner(player);

//	console.log(player)
});

