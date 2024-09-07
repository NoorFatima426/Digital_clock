setInterval( ()=>{
    let hours=document.getElementById('hours');
    let minutess=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let ampm=document.getElementById('ampm')
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    //covert 24 hour format to 12 hour
    if(h>12){
        h=h-12;
    }
    let t_am= h<=12 ? "PM" : "AM";
    //add zero before single digit
    h=(h<10)? `0${h} ` : h;
    m=(m<10)? `0${m} ` : m;
    s=(s<10)? `0${s} ` : s;
    hours.innerHTML=h;
    minutess.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=t_am;
},1000)