//beginning of document, when the page loads, what information is ready to use
$(document).ready(function(){
//countries are loaded from json
  var countries = {
    type: 'get',
    dataType: 'json',
    url: 'https://restcountries.eu/rest/v1/all',
    success: function(countries) {
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
// start new game function
      // startNewGameRound();
      //empty out country p/ make sure it is empty before the start of the game
      $('.country').empty()
      //if it is empty console.log empty
      console.log("empty")
      //insert new country name
      $('.country').text(randomCountry());
      $('.answers').empty();
      answerArray.push(createButton(country.capital));
      console.log(country.capital)
      // var buttons = []

      return appendArray()
    });

    // next.click
    $('.next').click(function() {
      // change the country first before these 2 lines
      $('.country').empty().text(country.name);
      startNewGameRound();
    });

    // answersContainer = $('.answers');
    // appendArray(answersContainer);

    function randomIndex () {
       Math.round(Math.random() * 4)
    }
    var score = 0;
    var correct = 0;
    var wrong = 0;
    function countryChosen(){
      return $('.country').text();
    }
  }); // ajax.done is finished
// }); // end document.ready

var answerArray = []; //array where answers/capitals are pushed, 1 correct 3 wrong
var myCountries = []; //array where objects (countries and capitals) are pushed from Json

var country; // country displayed at the country we are guessing capitals for

var score = 0; //total score for the game
var correct = 0;// correct guessed answers
var wrong = 0; // wrong guessed answers
var round = 0; //how many questions in one game
// var answersContainer;
// var playCount = 30;

//constructor for each country
function Country(name, capital) {
    this.name = name;
    this.capital = capital;
}

function createButton(country) {
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
}

function startNewGameRound() {
  $('.country').empty()
  country = randomCountry();
  console.log(country);
  $('.answers').empty();
//   if (round > 0 && round <= playCount) {
//     appendArray();
//   }
//   round++;
//   // ('.answers').append(());
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randomCountry() {
  var countrySelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  return countrySelected;
};

function appendArray(element){
  for (var i = 0; i < 3; i++) {
    var randomCtry = randomCountry();
    answerArray.push(createButton(randomCapital()));
  }
  var myArray = shuffleArray(answerArray);

  for (var i = 0; i < 4; i++){
    $(element).append(myArray[i])
  }
  answerArray.length = 0;
}

function randomCapital () {
  var capitalSelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  console.log(capitalSelected)
  return JSON.stringify(capitalSelected);
};

function scoreboard(){
  score++
  $('.score').text(score)
}

function correctboard(){
  correct++
  $('.correct').text(correct)
}

function wrongboard(){
  wrong++;
  $('.wrong').text(wrong)
}

function compare(countries){
  //loop
  for (var i = 0; i < myCountries.length; i++) {
    if (countryChosen() == countries[i].name) {
      return countries[i].capital
    }
 }
}//end of function compare
//beginning of document
$(document).ready(function(){
  var countries = {
    type: 'get',
    dataType: 'json',
    url: 'https://restcountries.eu/rest/v1/all',
    success: function(countries) {
      countries.forEach(function(country, i) {
        myCountries.push(new Country(country.name, country.capital))
      });
      //console.log(countries)
    },
    error: function(error) {
      alert(error);
    }
  };
  $.ajax(countries)
  //
  // $.ajax(countries).done(function(data) {
  //   // play.click
  //   $('.play').click(function(){
  //     startNewGameRound();
  //     $('.country').empty()
  //     console.log(country)
  //     $('.country').text(country.name);
  //     $('.answers').empty();
  //     answerArray.push(createButton(country.capital));
  //     console.log(country.capital)
  //     var buttons = []
  //
  //     return appendArray()
  //   });

    // next.click
    $('.next').click(function() {
      // change the country first before these 2 lines
      $('.country').empty().text(country.name);
      startNewGameRound();
    });

    answersContainer = $('.answers');
    appendArray(answersContainer);

    function randomIndex () {
       Math.round(Math.random() * 4)
    }
    // var score = 0;
    // var correct = 0;
    // var wrong = 0;
    function countryChosen(){
      return $('.country').text();
    }
  }); // ajax.done is finished
}); // end document.ready

// TIMER: SOON
// start timer - https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
// var timeLeft = 60;
// var oneSecondInMilliseconds = secondsToMilliseconds(1);
// // not used; just for conversion reference
// function secondsToMilliseconds(time) {
//   return time * 1000;
// }
// function everySecond() {
//   function(evt) {
//     timeLeft--;
//     if (timeLeft === 0 || timeLeft <= 0) {
//       clearInterval(timer);
//     } else {
//       // otherwise
//     }
//     console.log(timeLeft);
//   }
// }
//setInterval(function, howLongBetweenFuntionCalls)
// var timer = setInterval(everySecond, oneSecondInMilliseconds);
// end timer
