function myFunction(){

    let distanciaKm = parseInt(prompt("Ingresa la distancia que andarás (en Kilometros*)"))
    let rendimientoPorLitro = parseInt(prompt("Ingresa el rendimiento de Kilometros/ Litro de tu vehiculo"))
    let valorGas = parseFloat(prompt("Ingresa el valor del combustible"))
    let kilometrosRecorridos = ""
    let moneda = prompt("Ingresa la opción de la moneda a evaluar.\nCLP) Pesos Chilenos\nARS) Pesos Argentinos\nMXN) Pesos Mexicanos\nUSD) Dolar\nEU) Euro\nBTC) Bit Coins")
    let consumo = distanciaKm / rendimientoPorLitro
    console.log("El consumo esperado para " + distanciaKm + "km es de: " + consumo + " lts")
    let gasto = valorGas * consumo
    console.log("El gasto esperado es de: " + gasto)

    while (moneda != "CLP" && moneda != "ARS" && moneda != "MXN" && moneda != "USD" && moneda != "EU" && moneda != "BTC") {
        switch (moneda) {
            case "CLP":
                alert("Listo!");
                break;
            case "ARS":
                alert("Listo!");
                break;
            case "MXN":
                alert("Listo!");
                break;
            case "USD":
                alert("Listo!");
                break;
            case "EU":
                alert("Listo!");
                break;
            case "BTC":
                alert("Listo!");
                break;
            default:
                alert("No ingresaste una moneda valida")
                break;
        }
        moneda = prompt("Ingresa otra opción de moneda y en Mayusculas:\nCLP) Pesos Chilenos\nARS) Pesos Argentinos\nMXN) Pesos Mexicanos\nUSD) Dolar\nEU) Euro\nBTC) Bit Coins")
    }
    document.getElementById("demo0").innerHTML = "Considerando que la distancia que vas a recorrer es de " + distanciaKm + "\n y que tu vehiculo rinde " + rendimientoPorLitro + " Kms/Lts:";
    document.getElementById("demo1").innerHTML = "El consumo esperado para " + distanciaKm + "km es de: " + consumo + " lts";
    document.getElementById("demo2").innerHTML = "El gasto esperado es de: " + gasto + " " + moneda + ".";
    
    let i = 1
    for (let i = 1; i <= distanciaKm; i++) {
        let resultado = (consumo * i) / distanciaKm;
        console.log("El gasto a los " + i + " km es " + resultado)
}



}



function myFunction2(){
    
        let num = prompt("Ingresa la velocidad en Km/Hr a la que se frenará");
        const pisoMojado = 2
        const pisoConHielo = 3

        if (isNaN(num)) {
            alert("No ingresaste un numero valido")
        } else if (num > 100 && num < Infinity) {
            alert("Ingresado OK")
            console.log("Velocidad superior a 100km/hr")
            valorDeNumero = num.valueOf();
            extraccionNumero = valorDeNumero.slice(0, 2);
            distanciaFrenadoSobre100 = extraccionNumero * 3
            document.getElementById("frenado0").innerHTML = "Considerando que frenarás a la velocidad de "+num+" kms/hr:";
        document.getElementById("frenado1").innerHTML = "La distancia de frenado en condiciones normales es de: " + distanciaFrenadoSobre100 + " mts";
        document.getElementById("frenado2").innerHTML ="Si el piso está mojado, la distancia sería: " + distanciaFrenadoSobre100 * pisoMojado + " mts"
        document.getElementById("frenado3").innerHTML ="Si el piso tiene hielo, la distancia sería: " + distanciaFrenadoSobre100 * pisoConHielo + " mts"
            
        } else if (num < 100 && num > 0) {
            alert("Ingresado OK")
            console.log("La velocidad es inferior a 100km/hrs")
            valorDeNumero = num.valueOf();
            extraccionNumero = valorDeNumero.slice(0, 1);
            distanciaFrenadoBajo100 = extraccionNumero * 3
            document.getElementById("frenado0").innerHTML = "Considerando que frenarás a la velocidad de "+num+" kms/hr:";
        document.getElementById("frenado1").innerHTML = "La distancia de frenado en condiciones normales es de: " + distanciaFrenadoBajo100 + " mts";
        document.getElementById("frenado2").innerHTML ="Si el piso está mojado, la distancia sería: " + distanciaFrenadoBajo100 * pisoMojado + " mts"
        document.getElementById("frenado3").innerHTML ="Si el piso tiene hielo, la distancia sería: " + distanciaFrenadoBajo100 * pisoConHielo + " mts"
        }
        
    }

