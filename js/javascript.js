"use strict";
var forma = document.getElementById("forma"),
    salidaT = document.getElementById("salidaT"),
    tortas = document.getElementsByName("tortas"),
    salidaT1 = document.getElementById("salidaT1");  
forma.addEventListener("click", validaT, false);    
   

function validaT(){
   var tortasc = new Array();
   for (var i = 0, total = tortas.length; i < total; i++) {
      var torta = tortas[i];
      if (torta.checked){
          tortasc.push(torta.value);
      }
   }
   salidaT.textContent = tortasc.join(", ");     
}

forma.addEventListener("click", precio, false);    
function precio(){
  
    var total=0;
    for (var w = 0, totalp = tortas.length; w < totalp; w++){
        var torta1=tortas[w];
        if(torta1.checked){
            total = total+parseInt(torta1.getAttribute("data-number"));
        }
    }
    salidaT1.textContent = ("precio:  $")+total;
}
