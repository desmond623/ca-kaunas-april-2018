// function btn_click(btn){    
//     let btnID = btn.id;

//     alert(btnID+" was clicked");
//     //document.getElementById("").innerHTML = "<h3>"+btnID+" was clicked</h3>";
// }

//"CLICK" Event listener
$(".btn").click(function () {
//let text = $(this).text();
    $(this).text("alah ahk bar!");
    $(this).fadeOut('slow').fadeIn(5000);
});

$(".btn").hover(function () {
    $(this).text("ALAH !!!!");
}, function () { //after explosion funkcyja
    $(this).text("............");
});




$(".btn").click(function() {

    //cia rasom kas vyks kai ckikinsi

});



//yvykis
$(".result").click(function () {
$(this).slideUp("slow");

});