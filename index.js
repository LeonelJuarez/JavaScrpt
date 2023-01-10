
alert("Bienvenido a LeoPresta");
let ent = prompt("¿Desea simular un prestamo?");

while(ent === "si"){
    let monto = parseFloat(prompt("¿Cuanto desea solicitar?"));
    let cuota = parseInt(prompt("¿En cuantas cuotas lo deseas abonar?(3-6-12)"));

    alert("Deseas solicitar $" + monto + " en " + cuota + " cuotas");
    
    if(cuota===3|| cuota===6 || cuota ===12){
    alert("El total a devolver seria "+ (monto+calculo(monto,cuota)));
    }else{
        alert ("Cuota mal ingresada");
        cuota = parseInt(prompt("Vuela a ingresar la cuota (3-6-12)"));
        alert("El total a devolver seria "+ (monto+calculo(monto,cuota)));
    }


    let con = prompt ("Deseas el prestamo?");
    
    if (con==="si"){

        alert ("Sera depositado en 5 dias habiles en tu caja de ahorro! Muchas gracias y que lo disfrutes 😄") ;
        break;
    } else{
    ent = prompt("Desea simular otro prestamo?");
    }
}


    function calculo(monto,cuota){
    if(cuota===3){
        prestamo = monto * 30 / 100;
        return prestamo;
    } else if (cuota===6){
        prestamo = monto * 35/100;
        return prestamo;
    } else if (cuota===12){
        prestamo=monto*50/100;
        return prestamo;
    } 
    
}
