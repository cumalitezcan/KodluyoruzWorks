 
const time = () => {
    var today;
    today = new Date().toLocaleTimeString()
    document.getElementById("myClock").innerHTML = today;
} 


setInterval(time,1000);

var isim = prompt("Lütfen isminizi giriniz.");
document.getElementById("name").innerHTML = isim;

const day = () => {

    var days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    document.getElementById("date").innerHTML = days[new Date().getDay()-1];
}

day();