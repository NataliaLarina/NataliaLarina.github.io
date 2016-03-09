var answerArray = []
var myCountries = [];

var score = 0;
var correct = 0;
var wrong = 0;
$(document).ready(function(){



function randomCountry() {
  var countrySelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  return countrySelected;
};

function randomCapital () {
var capitalSelected = myCountries[Math.floor(Math.random() * myCountries.length)];
console.log(capitalSelected)
return JSON.stringify(capitalSelected);
};

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

function Country(name, capital) {
    this.name = name;
    this.capital = capital;
  }

  console.log(myCountries);

  var playCount = 30;
   $('.play').click(function(){
     if (playCount >= 30) {
       // stop game
     }
     playCount += 1;

     var country = randomCountry();
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
    function createButton(country) {
    var button = document.createElement("button");
    button.innerHTML = country;
    button.addEventListener("click", function(){
      console.log('btn is working')
      if ($(this).text() === compare(myCountries)){
        scoreboard()

        correctboard()

        console.log('the if statement hit: ' + score + " this is the score")
      }
      else  {
        wrongboard()
    
        console.log('the else statement hit')
      }


    return button;
}
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
      answerArray.push($('<button class="sharedClass" id='+[i]+'>' + randomCountry().capital + '</button>'))
    }

    return appendArray()

  });

function appendArray(){
  var myArray = shuffleArray(answerArray)

  for (var i = 0; i < 4; i++){
    $('.answers').append(myArray[i])
  }
  answerArray.length = 0;
}

 function randomIndex () {
     Math.round(Math.random() * 4)
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

  // //trying to find the rigth capital for the country displayed,
  // //first trying to find it in json data and see what capital it has
  var score = 0;
  var correct = 0;
  var wrong = 0;
  function countryChosen(){
    return $('.country').text();
  }
  // var countryChosen = $('.country').text();
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
$('.sharedClass').click(function(){
  console.log('my button is working la la la');
  if ($(this).text() === compare(myCountries)){
    score +=1
    correct +=1
  }
  else  {
    wrong +=1
  }
})


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
}

function correctboard(){
  correct++
}

function wrongboard(){
  wrong++
}

//timer?? doesnt work!!!
function createCountDown(timeRemaining) {
    var startTime = Date.now();
    return function() {
       return timeRemaining - ( Date.now() - startTime );
    }
}
