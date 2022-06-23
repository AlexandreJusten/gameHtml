var horas=0
var mins=0
var secs=0

var button=document.getElementById("but")
var button2=document.getElementById("night")
var horaid=document.getElementById("hora")
var minid=document.getElementById("min")
var secid=document.getElementById("sec")
var jogo=document.getElementById("jogo")
button.onclick=st
var night=document.getElementById("night")
night.onclick=mudar
var body=document.getElementById("body")
var text=document.getElementById("text")
va=true
function st(){
    if(va){
    start();
    va=false}else{
        console.log("O relogio ja foi Iniciado...")
    }
}
function start(){ 
    setTimeout(function() {
        secs++
        colo();
        if(secs<10){
            secid.innerHTML="0"+secs
        }else{
    secid.innerHTML=secs}
     if(secs==60){
            setTimeout(function() {
                
                button.innerHTML="Iniciar Relogio"
            },40);
            button.innerHTML="japa g41"
    }
    if(secs==60){
        secs=0
        mins++
        if(mins<10){
            minid.innerHTML="0"+mins
        }else{
        minid.innerHTML=mins}
        if(mins==60){
            mins=0
            horas++
            if(horas<10){
                horaid.innerHTML="0"+horas
            }else{
            horaid.innerHTML=horas}
        }
      
    }
     start();
    },400);
}


function mudar(){
    if(button2.innerHTML == 'Light'){
        //claro
    body.style.cssText='background-color: #white';
    text.style.cssText='color: black';
    button.style.cssText='color: black';
    button2.style.cssText='color: black';
    jogo.style.cssText='color: black;margin-left: 47px';
    button2.innerHTML='Night';
    
    }else{
        //escuro
    body.style.cssText='background-color: #222';
    text.style.cssText='color: #fff';
    button.style.cssText='color: #fff';
    jogo.style.cssText='color: #fff;margin-left: 47px';
    button2.style.cssText='color: #fff';
    button2.innerHTML='Light';
    
    }

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



