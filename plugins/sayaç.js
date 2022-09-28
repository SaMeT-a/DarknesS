
// Powered By Samet
var countDownDate = new Date("Nov 30, 2022 13:45:10").getTime();

var x = setInterval(function() {


  var now = new Date().getTime();
   
  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("sayaç").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds + "";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sayaç").innerHTML = "AÇILIYORUZ";
  }
}, 1000);
