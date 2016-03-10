var answerArray = []
var myCountries = [];

var country;

var score = 0;
var correct = 0;
var wrong = 0;
var round = 0;
var answersContainer;
var playCount = 30;


// function goToPreviousCountry() {
//
// }
//
// function newAnswers() {
//
// }
function Country(name, capital) {
    this.name = name;
    this.capital = capital;
}
// this function does x and y
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
  console.log('a new round happens');
  console.log('change answer/country/questions');
  country = randomCountry();
  console.log(country);
  $('.answers').empty();
  if (round > 0 && round <= playCount) {
    appendArray();
  }
  round++;
  // ('.answers').append(());
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

function appendArray(element){
  var myArray = shuffleArray(answerArray);

  for (var i = 0; i < 4; i++){
    $(element).append(myArray[i])
  }
  answerArray.length = 0;
}

function randomCountry() {
  var countrySelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  return countrySelected;
};

function randomCapital () {
  var capitalSelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  console.log(capitalSelected)
  return JSON.stringify(capitalSelected);
};

$(document).ready(function(){

  var countries = {
    type: 'get',
    dataType: 'json',
    url: 'https://restcountries.eu/rest/v1/all',
    success: function(countries) {
      countries.forEach(function(country, i) {
        myCountries.push(new Country(country.name, country.capital))
      });
      console.log(countries)
      console.log(countries[0].name);
    },
    error: function(error) {
      alert(error);
    }
  };
  $.ajax(countries);


  $('.play').click(function(){

   startNewGameRound();


   $('.country').empty()
   console.log(country)
  $('.country').text(country.name);
  $('.answers').empty();
      // get random country index - similar to getCountry
      // var randomCountryIndex = (myCountries([i])[Math.floor(Math.random() * myCountries.length)]).indexOf;
      // then loop through the the countries
      // get countries[randomNumber]
      // render button (this random order)
      // remove that item from the array
      // class = 'right-answer'
      // $(random[i]).addClass('right-answer')
      // var index = array.indexOf(item);
      // array.splice(index, 1);

      // $('<button class="sharedClass">' + country.capital + '</button>').on('click', function(){
      //   console.log('my button is working')
      // });
      // $(btn).on('click', function(evt) {
      //   console.log('my button is working')
      // });

      answerArray.push(createButton(country.capital));

      // $('.answers').append(
      // answerArray.push('<button id=3>' + country.capital + '</button>')
      console.log(country.capital)
      // $('.answers').append('<button>' + country.capital + '</button>');
      var buttons = []
      for (var i = 0; i < 3; i++) {
        // $('<button class="sharedClass" id='+[i]+'>' + randomCountry().capital + '</button>').on('click', function(){
        //   console.log('my button is working')
        // });
        answerArray.push(createButton(randomCountry().capital))
      }

      return appendArray()

    });

    answersContainer = $('.answers');
    appendArray(answersContainer);

   function randomIndex () {
       Math.round(Math.random() * 4)
     }


    var score = 0;
    var correct = 0;
    var wrong = 0;
    function countryChosen(){
      return $('.country').text();
    }
  //   var countryChosen = $('.country').text();
  // $('#0').click(function ({
  //   console.log('my button is working');
  //   if (this.text() === compare(){
  //     score +=1
  //     correct +=1
  //   }
  //   else (this.text() !=== compare() {
  //     wrong +=1
  //   })
  // }))
  //
  //
  //
  // $('#2').click(function ({
  //   console.log('my button is working');
  //   if (this.text() === compare(){
  //     score +=1
  //     correct +=1
  //   }
  //   else (this.text() !=== compare() {
  //     wrong +=1
  //   })
  // }))
  // $('#3').click(function ({
  //   console.log('my button is working');
  //   if (this.text() === compare(){
  //     score +=1
  //     correct +=1
  //   }
  //   else (this.text() !=== compare() {
  //     wrong +=1
  //   })
  // }))
  //  on click of each answer button
  // console.log('my button is working')

  //  this will refere to the button you are pressing and then use a method on this to grab the value or text of the button
  // compare that answer to the compare function
  // if yes then we add to the score
  // else do something


    function compare(countries){
      //loop
      for (var i = 0; i < myCountries.length; i++) {
        if (countryChosen() == countries[i].name)
          return countries[i].capital
     }
   }//end of function compare

  });

  function scoreboard(){
    score++
    $('.score').text(score)
  }

  function correctboard(){
    correct++
    $('.correct').text(correct)
  }

  function wrongboard(){
    wrong++
    $('.wrong').text(wrong)
  }

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

  $('.next').click(function() {
   // change the country first before these 2 lines
     $('.country').empty().text(country.name);
     startNewGameRound();

});

// $('.previous').click(function()) {
//   $('.country').empty()
//   goToPreviousCountry();
//
// });
