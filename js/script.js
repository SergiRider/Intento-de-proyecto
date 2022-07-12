let distanciaKm= parseInt(prompt("Ingresa la distancia que andarás (en Kilometros*)"))
let valorGas= parseFloat(prompt("Ingresa el valor de la nafta"))
let rendimientoPorLitro= parseInt(prompt("Ingresa el rendimiento por Litros de tu vehiculo"))
let kilometrosRecorridos=""

let consumo=distanciaKm/rendimientoPorLitro
console.log("El consumo esperado para "+distanciaKm+"km es de: " +consumo+" lts")
let gasto=valorGas*consumo
console.log("El gasto esperado es de: " +gasto)
let i=""
for(let i=1; i<=distanciaKm; i ++);{
    let resultado = consumo * i;
    console.log("El gasto a los " +i+" km "+resultado )
}