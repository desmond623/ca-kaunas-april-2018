//this is a variable/kintamasis
let cities = [];
//++++++++++++++++++++++++++++++
let cities_list_string = localStorage = localStorage.getItem("cities");

let cities_stored = JSON.parse(cities_list_string);
console.log(cities_stored);

if (cities_stored != null) {
  cities_stored == cities
}








function test() {

  //console.log(typeof cities); // tikrinam masivo tipa

  let newCity = document.getElementById("txt_city").value; // nuskaitom nauja miesta is text laukelio
  cities.push(newCity); // pridedam nauja miesta i masiva

  //document.getElementById("result").innerText = cities;

  printCities(cities);
}

function printCities(cities) {

  let h = "";
  for (let i = 0; i < cities.length; i++) {


    //need 0-1-2-3 result classes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    console.log(i);
    console.log(cities[i]);
    h = h + +"<div><span>" + i + "</span><div><h3 class='prettyText'>" + cities[i] + "</h3></div>";



    // res 0
    document.getElementById("result").innerText = document.getElementById("txt_city").value;
    //res 1
    document.getElementById("result1").innerText = document.getElementById("txt_city1").value;
    //res 2
    document.getElementById("result2").innerText = document.getElementById("txt_city2").value;
    //res 3
    document.getElementById("result3").innerText = document.getElementById("txt_city3").value;

  }





  cities.push(city);

  console.log(cities);

  let cities_string = JSON.stringify(cities);
  localStorage.setItem("cities", cities_string);

}
