const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const in_horas = document.getElementById("in_h");
const in_minutos = document.getElementById("in_m");
const in_segundos = document.getElementById("in_s");
let num_h = 0;
let num_m = 0;
let num_s = 0;

const btn = document.getElementById("btn");


btn.addEventListener("click",function(){
  //Horas
  if(in_horas.value >= 24 || in_horas.value <= 0 || in_horas.value == "Valor Inválido"){
    in_horas.value = "Valor Inválido";
  }else{

    num_h = in_horas.value;
    horas.innerHTML = num_h;
  }
  //Minutos
  if(in_minutos.value >= 59 || in_minutos.value <= 0 || in_minutos.value == "Valor Inválido"){
    in_minutos.value = "Valor Inválido";
  }else{
    num_m = in_minutos.value;
    minutos.innerHTML = num_m;
  }
  //Segundos
  if(in_segundos.value >= 59 || in_segundos.value <= 0 || in_segundos.value == "Valor Inválido"){
    in_segundos.value = "Valor Inválido";
  }else{
    num_s = in_segundos.value;
    segundos.innerHTML = num_s;
  }

  setInterval(function(){
    horas.innerHTML = num_h;
    minutos.innerHTML = num_m;
    segundos.innerHTML = num_s;

    //Horas
    if(num_h == 0 ){
      horas.innerHTML = foda-se;
    }
    //Minutos
    if(num_m > 0 && num_s == 0){
      num_m -=1;
    }else{
      num_m = 59
      num_h -=1;
    }
    //Segundos
    if(num_s > 0 && num_m > 1){
      num_s -=1;
    } else{
      num_s = 59
    }
  }, 1000);

  });
