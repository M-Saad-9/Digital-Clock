function clock() {
    let date = document.getElementById("Dates");
    //let month = document.getElementById("Months");
    //let year = document.getElementById("Years");
    
    let hrs = document.getElementById("hours");
    let min = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    let per = document.getElementById("period");
    
    let dd = new Date().toDateString();
    let mm = new Date().getMonth();
    let yy = new Date().getFullYear();

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";

    if(h > 12){
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s : s; 

    date.innerHTML = dd;
    //month.innerHTML = mm;
    //year.innerHTML = yy;

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    per.innerHTML = ampm;
};
setInterval(clock,1000);
