function agree(){
var x;
if(confirm("You press this fu..ing button! do you want alach akbar?") == true) {
    x = "Boom bled!";
}
else {
    x = "ahhh... Muhamed is coming to get you!";
}
document.getElementById("demo").innerHTML = x;
}