
let cities = [];









function test(){

    //console.log(typeof cities); // tikrinam masivo tipa
 
    let newCity = document.getElementById("txt_city").value; // nuskaitom nauja miesta is text laukelio
    cities.push(newCity); // pridedam nauja miesta i masiva
 
    //document.getElementById("result").innerText = cities;
 
    printCities(cities);
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
};