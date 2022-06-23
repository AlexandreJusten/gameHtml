var button=document.getElementById("night")
var button2=document.getElementById("cr")
var img = document.querySelector("#bg");
var tubo = document.querySelector("#tubo");
var ghost = document.querySelector("#ghostjs");
var h1=document.getElementById("h1")
night.onclick=mudar

function mudar(){
    if(button.innerHTML == 'Night'){
        //claro
    button.style.cssText='color: white';
    button2.style.cssText='color: white';
    img.setAttribute('src', 'img/bgdark.gif');
    tubo.setAttribute('src', 'img/tudk.png');
    ghost.setAttribute('src', 'img/ghostdk.gif');
    button.innerHTML='Light';
    h1.style.cssText='position: absolute;margin-left: 34%;margin-top: 300px;color: #fff;';
    
  
    }else{
        //escuro
        button.style.cssText='color: black';
        button2.style.cssText='color: black';
        img.setAttribute('src', 'img/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg');
        tubo.setAttribute('src', 'img/super-mario-brothers-ga4ea720d6_1280.png');
        ghost.setAttribute('src', 'img/ghost.gif');
        button.innerHTML='Night';
        h1.style.cssText='position: absolute;margin-left: 34%;margin-top: 300px;color: #black;';
    }

}