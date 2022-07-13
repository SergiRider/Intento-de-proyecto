

let distanciaKm= parseInt(prompt("Ingresa la distancia que andarás (en Kilometros*)"))
let valorGas= parseFloat(prompt("Ingresa el valor de la nafta"))
let rendimientoPorLitro= parseInt(prompt("Ingresa el rendimiento de Kilometros/ Litro de tu vehiculo"))
let kilometrosRecorridos=""
let moneda=prompt("Ingresa la opción de la moneda a evaluar.\nCLP) Pesos Chilenos\nARS) Pesos Argentinos\nMXN) Pesos Mexicanos\nUSD) Dolar\nEU) Euro\nBTC) Bit Coins")

let consumo=distanciaKm/rendimientoPorLitro
console.log("El consumo esperado para "+distanciaKm+"km es de: " +consumo+" lts")
let gasto=valorGas*consumo
console.log("El gasto esperado es de: " +gasto)

while(moneda!="CLP" && moneda!="ARS" && moneda!="MXN" && moneda!="USD" && moneda!="EU" && moneda!="BTC" ){
    switch (moneda){
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
moneda=prompt("Ingresa otra opción de moneda:\nCLP) Pesos Chilenos\nARS) Pesos Argentinos\nMXN) Pesos Mexicanos\nUSD) Dolar\nEU) Euro\nBTC) Bit Coins")
}

let i=1
for(let i=1; i<=distanciaKm; i ++){
    let resultado = (consumo * i) / distanciaKm;
    console.log("El gasto a los " +i+" km es "+resultado )
}

document.write("<p>Considerando que la distancia que vas a recorrer es de " +distanciaKm+"\n y que tu vehiculo rinde "+rendimientoPorLitro+" Kms/Lts:</p>")
document.write("<p>El consumo esperado para "+distanciaKm+"km es de: " +consumo+" lts</p>")
document.write("<p>El gasto esperado es de: " +gasto+" "+moneda+".</p>")
