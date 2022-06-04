
     let el = document.getElementById('ghostjs');
     let el2 = document.getElementById('tubo');

    function stop() {


        setTimeout(function() {
        
            el.style.cssText ='animation:';
    
          // Again
        
    
          // Every 3 sec
        }, 2100);
    }

    // Begins

    function stsop() {


        setTimeout(function() {
        
            let tubop = el2.getBoundingClientRect().x;
           // console.log("tubo"+tubop);
            let ghostp = el.getBoundingClientRect().y;
            //console.log("ghost"+ghostp);
    
       
          if(tubop>300 && tubop <350 && ghostp<=600 && ghostp>=500){
            //console.log("perdeu"+tubop);
            alert("voce perdeu")
          }
        
         stsop();
          // Every 3 sec
        },100);
    }
stsop();
document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    el.style.cssText =
    'animation: pularghost 2s ';
    stop();
  }, false);
