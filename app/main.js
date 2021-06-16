function maxtime() {
 let hours = document.getElementById('hour');
 let minutes = document.getElementById('minutes');
 let seconds = document.getElementById('seconds');
 let ampm = document.getElementById('ampm');

 let h = new Date().getHours();
 let m = new Date().getMinutes();
 let s = new Date().getSeconds();

 if (h == 0) {
  h = 12;
 }

 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s;

 hours.innerHTML = h;
 minutes.innerHTML = m;
 seconds.innerHTML = s;
}

var interval = setInterval(maxtime, 1000);