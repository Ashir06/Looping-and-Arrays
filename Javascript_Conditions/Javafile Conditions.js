// Part 1

var userChoice = prompt("Choose heads or tails");
var randomNumber = Math.round(Math.random());
var computerChoice = randomNumber === 0 ? "heads" : "tails";

if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

// Part 2

var birthYear = prompt("In which year were you born?");
var currentYear = 2023; 
var age = currentYear - birthYear; 

if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}
