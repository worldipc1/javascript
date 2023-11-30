// ejercicio 1 algoritmo con un condicional

let number = parseFloat(prompt("ingresa un numero cualquiera"));
function determinarSigno(numero) {

    if (numero > 0) {
        console.log("El número es positivo");
        alert("el numero es positivo")
    } else if (numero < 0) {
        console.log("El número es negativo");
        alert("el numero es negativo")
    } else {
        console.log("El número es cero");
        alert("el numero es 0")
    }
}
determinarSigno(number);


// ejercicio 2 crear un algoritmo utilizando un ciclo


for (let i = 0; i < 10; i++) {
    if (i % 2 == 0 ){
        console.log("Número par:", i);
    }

      
}

// simulador interactivo: Convertidor de monedas

let ingresarMonto = parseFloat(prompt("ingresar el monto a convertir"));
let dolar = 0.0028;
let yuanes = 0.020;
let lira = 0.0022;
let euro = 0.0025;

while (isNaN(ingresarMonto)) {
     ingresarMonto = parseFloat(prompt("ingresa un numero por favor"))
     if (!isNaN(ingresarMonto)) {
        break;
    }
}

function cambio() {

    let cambioDeMoneda = prompt("ingresar  para Dolar D para Lira esterlina L para Yuanes Y para Euro E ");


    switch (cambioDeMoneda.toLocaleUpperCase()) {
        case 'D':
            let resultado = ingresarMonto * dolar;
            console.log("la conversion ingresada es de " + resultado + " Dolares")
            alert("la conversion ingresada es de " + resultado + " Dolares")
            break;
        case 'L':
            let resultado2 = ingresarMonto * lira;
            console.log("la conversion ingresada es de " + resultado2 + " Liras Esterlinas")
            alert("la conversion ingresada es de " + resultado2 + " Liras Esterlinas")
            break;

        case 'Y':
            let resultado3 = ingresarMonto * yuanes;
            console.log("la conversion ingresada es de " + resultado3 + " Yuanes")
            alert("la conversion ingresada es de " + resultado3 + " Yuanes")
            break;

        case 'E':
            let resultado4 = ingresarMonto * euro;
            console.log("la conversion ingresada es de " + resultado4 + " Euros")
            alert("la conversion ingresada es de " + resultado4 + " Euros")
            break;
        default:
            console.log("Opcion no valida. Por favor, ingrese D,L,Y o E")
        cambio()
    }

}
cambio()





