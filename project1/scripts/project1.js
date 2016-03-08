$(document).ready(function(){





$.ajax(countries);

})

//getting json countries with ajax
var countries = {
  type: 'get',
    dataType: 'json',
    url: 'https://restcountries.eu/rest/v1/all',
    success: function(data) {
      for (var i = 0; i < data.length; i++) {


      myCountries.push(new Country(data[i].name, data[i].capital));
      }
      console.log(data)
      console.log(data[0].name);
    },
    error: function(error) {
      console.log(error);
    }
  };

function randomCountry() {
  var countrySelected = myCountries[Math.floor(Math.random() * myCountries.length)];
  return countrySelected.name;
};

function Country(name, capital) {
  this.name = name;
  this.capital = capital;
}













//creating variable for country objects(country:capital)
var myCountries = [];
console.log(myCountries);






//appending it to my Country div to be displayed on the screen
 $('.play').on('click', function(){
  $('.Country').append(randomCountry());
});

//trying to find the rigth capital for the country displayed,
//first trying to find it in json data and see what capital it has
