
var countDownDate = new Date("Dec 30, 2022 13:45:10").getTime();

var x = setInterval(function() {


  var now = new Date().getTime();
   
  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("sayaç").innerHTML = "<span class='days'> "+ days + "</span><span class='gün'>Gün</span> <span class='hours'>" + hours + "</span><span class='saat1'>Saat</span> <span class='minute'>"
  + minutes + "</span><span class='Dakıka'>Dakika</span> <span class='second'>" + seconds + "</span><span class='Sanıye'>Saniye</span> ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sayaç").innerHTML = "AÇILIYORUZ";
  }
}, 1000);
