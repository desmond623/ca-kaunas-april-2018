



//cities is the variuble thing that makes the array thing work... i think...
let cities = [];

let cities_list_string = localStorage = localStorage.getItem("cities");

let cities_stored = JSON.parse(cities_list_string);
console.log(cities_stored);

if(cities_stored != null){
  cities_stored == cities
}








function test(){

    //console.log(typeof cities); // tikrinam masivo tipa
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let newCity = document.getElementById("txt_city").value; // nuskaitom nauja miesta is textu laukeliu
    cities.push(newCity); // pridedam nauja miesta i masiva
 
    //document.getElementById("result").innerText = cities;
 
    //printCities(cities);

    print_v2(newCity);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 }
 
function printCities(cities){
 
let h = "";
for(let i = 0;  i < cities.length; i++){
    
  console.log(i);
  console.log(cities[i]);
  h = h + "<div><h3 class='prettyText'>" + cities[i]+"</h3></div>";
  // console.log(cities[i]);
  
}
document.getElementById("result").innerHTML = h;

cities.push(cities);
    
    console.log(cities);

    let cities_string = JSON.stringify(cities);
    //localStorage.setItem("cities", cities_string);

}

function print_v2(zodis){
  document.getElementById("result").innerHTML = zodis;
}
