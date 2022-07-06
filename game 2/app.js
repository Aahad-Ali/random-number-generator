var num = document.getElementById("num");
var generate = document.getElementById("generate");
// var emp = "bhwdfbijofninmvNMIOJDVGIFDN5465vubhbuy156165hgjngnjgnhg5146514514hg5415g1n5gh41n53gh1n35hg1n515gh";

var random_number = () => {
    var rand = Math.floor(Math.random() * 1000);
    num.textContent = rand;

}

generate.addEventListener('click', random_number);


random_number();












