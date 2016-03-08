$(document).ready(function(){

//getting json countries with ajax
var myCountries = [];

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


  // EVERYTHIG ELSE HERE
  function randomCountry() {
    var countrySelected = myCountries[Math.floor(Math.random() * myCountries.length)];
    return countrySelected;
  };

  function Country(name, capital) {
    this.name = name;
    this.capital = capital;
  }


  console.log(myCountries);


  //appending it to my Country div to be displayed on the screen
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
    // var randomCountryIndex = (myCountries[Math.floor(Math.random() * myCountries.length)]).indexOf;
    // then loop through the the countries
    // get countries[randomNumber]
    // render button (this random order)
    // remove that item from the array
    // class = 'right-answer'
    // $(random[i]).addClass('right-answer')
    // var index = array.indexOf(item);
    // array.splice(index, 1);
    $('.answers').append('<button>' + country.capital + '</button>');
    for (var i = 0; i < 3; i++) {
      $('.answers').append('<button>' + randomCapital[i].capital + '</button>');
    }
  });

  function randomCapital () {
  var capitalSelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  return capitalSelected;
};
 
  // //trying to find the rigth capital for the country displayed,
  // //first trying to find it in json data and see what capital it has
  // // var score = 0;
  // // var correct = 0;
  // // var wrong = 0;
  var countryChosen = $('.country').text();

  function compare(){
    //loop
    for (var i = 0; i < myCountries.length; i++) {
      if (countryChosen == myCountries[i].name)
        alert(myCountries[i].capital)
        return myCountries[i].capital
   }
 }//end of function compare

});
