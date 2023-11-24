var startBtnEl = document.getElementById('StartBtn')
var currentQuestion = document.querySelector(".currentQuestion");
var answer = document.querySelector(".answer");


// document.getElementById('StartBtn'), since it is an ID


var question1 = {
    Question: "Commonly used data types DO Not include:",
    answers: ["1.strings", "2.booleans", "3. alerts", "4.numbers"],
    correctAnswer: 3
};

var question2 = {
    Question: "The condition in an if/else statemtn is enclose with _______.",
    answers: ["1.quotes", "2.curly brackets", "3. parenthesis", "4.square brackets"],
    correctAnswer: 3
};

var question3 = {
    Question: "Arrays in Javascript can be used to store ________.",
    answers: ["1.numbers and strings", "2.other arrays", "3. booleans", "4.all of the above"],
    correctAnswer: 4
};


var question4 = {
    Question: "String values must be enclosed within ________ when being assigned to variables.",
    answers: ["1.commas", "2.curly brackets ", "3. quotes", "4.parenthesis"],
    correctAnswer: 3
};


var question5 = {
    Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["1.Javascript", "2.terminal/bash ", "3. for loops", "4.console.log"],
    correctAnswer: 4
};


// array for questions
var questions = [
    question1,
    question2,
    question3,
    question4,
    question5
];






// add for loop to circle through questions
// function to start game
// function displayQuestions(index)
//     var allQuestions = document.querySelector(".questions");


function startGame() {

    console.log('startGame')
    // var questionElement = document.getElementById('questions');

    // questionElement.innerText = questions[i].Questions; 

    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i]);
        // var questionDisplay = document.querySelector('.questions');
        // questionDisplay.textContent = [];
    }
    displayQuestions()
}




var index = 0;
function displayQuestions(){
    var questionDisplay = document.querySelector('.questions');
    var current = questions[index]; 
    // currentQuestion.textContent = current.Question;
    
    currentQuestion.textContent = current;

    

    
    current.answers.forEach(answer => {
        //this loops through all of the answers from current question
        // create elements like buttons, set each of their textcontent to answer
        
        answer.textContent = current.answers;


        // add eventlisteners for when the button is clicked to check if it is the correct answer

        // answer.addEventListener("click", startGame);
        // if(correctAnswer == true){}
        // append elements to questionDisplay


    });

    // increment index at the end 
    index ++
}



// add event listener for start button
startBtnEl.addEventListener("click", startGame);




// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);





// pseudo code steps:
// press start button
// start timer
// display questions
// answer questions
// check if answer right or wrong
// deduct time for wrong answer
// capture score
// have test taker put initials by score and submit with other scores
// track scores