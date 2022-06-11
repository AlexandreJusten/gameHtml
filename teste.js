var horas=0
var mins=0
var secs=0

var button=document.getElementById("but")
var horaid=document.getElementById("hora")
var minid=document.getElementById("min")
var secid=document.getElementById("sec")
button.onclick=start
var night=document.getElementById("night")
night.onclick=mudar

var body=document.getElementById("body")
var text=document.getElementById("text")

function start(){
    start()
}

function start(){
    setTimeout(function() {
        secs++
        colo();
    secid.innerHTML=secs
    if(secs==60){
        secs=0
        mins++
        minid.innerHTML=mins
        if(mins==60){
            mins=0
            horas++
            horaid.innerHTML=horas
        }
      
    }
     start();
    },400);
}

function mudar(){
body.style.cssText='background-color: #222';
text.style.cssText='color: #fff';
}
function colo(){
    if(secs<20){
    secid.style.cssText='color:#FF5454'

}
    else if(secs<40){
        secid.style.cssText='color:#00FBFF'
    }
    else{
        secid.style.cssText='color:#00FF87'
    }
}

