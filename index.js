var readlineSync = require('readline-sync');

score = 0;

var userName = readlineSync.question("what is your name: ");

console.log("Welcome " + userName + " Lets Play GK question" )
console.log("----------------------------")

function play(question, answer) {
  
    var userAnswer = readlineSync.question(question)
    if (userAnswer == answer) {
        score = score + 1;
        console.log("YEAH you are Right!" + " || " + " Score is: " +score);
    } else {
        console.log("NO you are Wrong!" + " || " + " Score is: " +score)

    }
    console.log("Correct answer is: " +answer)
    console.log("----------------------------")
}

var questions = [
  {
    question: "What is the largest big cat in the world? \n (a) Tiger \n (b) Lion \n (c) Leopard \n Your Answer is: ",
    answer: "a" 
  },
  {
    question: "How many legs does an octopus have? \n (a) Three \n (b) Eight \n (c) Five \n Your Answer is: ",
    answer: "b"
  }, {
    question: "What type of animal is a poodle? \n (a) Monkey \n (b) Cat \n (c) Dog \n Your Answer is: ",
    answer: "c"
  },{
    question:"Where would you find the River Thames? \n (a) Paris \n (b) London \n (c) America \n Your Answer is: ",
    answer:"b"
  },
  {
    question:"What is the longest river in the world? \n (a) Ganga \n (b) Godavari \n (c) Nile \n Your Answer is: ",
    answer:"c"
  },
  {
    question:"Which planet is nearest to the Earth? \n (a) Mercury \n (b) Jupiter \n (c) Venus \n Your Answer is: ",
    answer:"d"
  }
];

for(i=0;i<questions.length;i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("----------------------------")
console.log("YAY, your highest score is: " +score)