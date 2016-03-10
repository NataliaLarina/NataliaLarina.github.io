console.log('js is reading the page right now');
var answerArray = []; //array where answers/capitals are pushed, 1 correct 3 wrong
var myCountries = []; //array where objects (countries and capitals) are pushed from Json

var country; // country displayed at the country we are guessing capitals for

var score = 0; //total score for the game
var correct = 0;// correct guessed answers
var wrong = 0; // wrong guessed answers
var round = 0; //how many questions in one game

function gameEnd() {
  alert('Game over. Your score is ' + score);
}
//constructor for each country
function Country(name, capital) {
    console.log('new Country()');
    this.name = name;
    this.capital = capital;
}//end of constructor

function createButton(country) {
  console.log('createButton');
  var button = document.createElement("button");
  button.innerHTML = country;
  button.addEventListener("click", function(){
    console.log('btn is working')
    if ($(this).text() === compare(myCountries)){
      scoreboard()
      correctboard()
      console.log('the if statement hit: ' + score + " this is the score")
    } else  {
      wrongboard()
      console.log('the else statement hit')
    }
  }, false);
  return button;
}//end of createButton

function startNewGameRound() {
  console.log('startNewGameRound()')
  $('.country').empty()
  country = randomCountry();
  console.log(country);
  $('.answers').empty();
//   if (round > 0 && round <= playCount) {
//     appendArray();
//   }
//   round++;
//   // ('.answers').append(());
}//end of startNewGameRound

function shuffleArray(array) {
  console.log('shuffleArray');
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}//end of shuffle array


function randomCountry() {
  console.log('randomCountry');
  var countrySelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  return countrySelected;
};//end of randomCountry


function appendArray(element){
  console.log('appendArray');
  answerArray = [];
  var countryAnswerArray = [];
  for (var i = 0; i < 5; i++) {
    var randomCtry = randomCountry();
    countryAnswerArray.push(randomCtry);
    answerArray.push(createButton(randomCtry.capital));
  }
  var myArray = shuffleArray(answerArray);
  $('.country').text(countryAnswerArray[0].name);
  for (var i = 0; i < 4; i++){
    $(element).append(myArray[i]);
  }
  // answerArray.length = 0;
  return answerArray;
}//end of appendArray


function randomCapital() {
  console.log('randomCapital');
  var capitalSelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  console.log(capitalSelected)
  return capitalSelected.capital;
};//end of randomCapital

function scoreboard(){
  console.log('scoreboard()');
  score++;
  $('.score').text(score)
  $('.country').empty()
  $('.answers').empty();
  appendArray($('.answers'));
}//end of scoreboard

function correctboard(){
  console.log('correctboard()');
  correct++
  $('.correct').text(correct)
}//end of correctboard

function wrongboard(){
  console.log('wrongBoard()');
  wrong++;
  $('.wrong').text(wrong)
}//end of wrongboard

function compare(countries){
  console.log('compare()');
  //loop
  for (var i = 0; i < myCountries.length; i++) {
    if (countryChosen() == countries[i].name) {
      return countries[i].capital
    }
 }
}//end of function compare

function randomIndex () {
  console.log('randomIndex');
   Math.round(Math.random() * 4)
}//end of function rendomIndex

function countryChosen(){
  console.log('countryChosen()');
  return $('.country').text();
}//end of countryChosen

//beginning of document, when the page loads, what information is ready to use
$(document).ready(function(){
  console.log('document.ready');
//countries are loaded from json
  var countries = {
    type: 'get',
    dataType: 'json',
    url: 'https://restcountries.eu/rest/v1/all',
    success: function(countries) {
      console.log('ajax finished');

    //if success go through each country in json and push country and capital in myCountries array
      countries.forEach(function(country, i) {
        myCountries.push(new Country(country.name, country.capital))
      });
    },
//if not you will see error alert on the screen
    error: function(error) {
      alert(error);
    }
}

 $.ajax(countries).done(function(data) {
    // when ajax is working and we got the info, when .play(Let'sPlay) button is clicked the new game
    //will start
    $('.play').click(function(){
      console.log('.play click');
      $('.country').empty()
      $('.answers').empty();
      appendArray($('.answers'));
      console.log("answerArray")


      // start timer - https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
      var timeLeft = 60;
      var oneSecondInMilliseconds = secondsToMilliseconds(1);
      // not used; just for conversion reference
      function secondsToMilliseconds(time) {
        return time * 1000;
      }
      function everySecond() {
          timeLeft--;
          if (timeLeft === 0 || timeLeft <= 0) {
            clearInterval(timer);
            gameEnd();
          } else {
            // otherwise
          }
          $('.timer').html(timeLeft);
          console.log(timeLeft);
        }
      var timer = setInterval(everySecond, oneSecondInMilliseconds);
    });

    // next.click
    $('.next').click(function() {
      console.log('.next click');
    //gives new country on the screen
      $('.country').empty();
      console.log('empty');
     //give new array of answers
      $('.answers').empty();
      appendArray($('.answers'));
      console.log("answerArray");
    });

  }); // ajax.done is finished
}); // end document.ready
