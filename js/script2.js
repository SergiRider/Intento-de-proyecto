
function myFunction3(){
let num = prompt("Ingresa la velocidad en Km/Hr a la que se frenará");
let distanciaObjeto=Number(prompt("Distancia de objeto a colisionar"))
let tiempoReaccion=Number(prompt("Tiempo de reacción"))
let tipoDeSuelo =Number(prompt("Ingrese la condición del suelo:\n1)Seco y buen estado.\n2)Mojado.\n3)Hielo."))

        while (tipoDeSuelo != "1" && tipoDeSuelo != "2" && tipoDeSuelo != "3") {
            switch (tipoDeSuelo) {
                case "1":
                    alert("Listo!");
                    break;
                case "2":
                    alert("Listo!");
                    break;
                case "3":
                    alert("Listo!");
                    break;
                default:
                    alert("No ingresaste una opción numérica valida")
                    break;
            }
            tipoDeSuelo = prompt("Ingrese la condición del suelo")
        }



        function velocidadSobre100(){
            if (num >= 101 && num < Infinity) {
                valorDeNumero = num.valueOf();
                extraccionNumero = valorDeNumero.slice(0, 2);
               let distanciaFrenadoSobre100 = extraccionNumero * 3
                return distanciaFrenadoSobre100
            }
        }

        function velocidadBajo100(){
            if (num <= 100 && num > 0) {   
                valorDeNumero = num.valueOf();
                extraccionNumero = valorDeNumero.slice(0, 1);
                let distanciaFrenadoBajo100 = extraccionNumero * 3
                return distanciaFrenadoBajo100
        }
    }

//-------------------------------------------//

let distanciaFrenadoBajo100=velocidadBajo100()

    function calculoFatalidadBajo100(){
        let resultado=distanciaFrenadoBajo100*tiempoReaccion*tipoDeSuelo;
       return resultado;
    }


////--------------------------------------------///

let distanciaFrenadoSobre100=velocidadSobre100()

  function calculoFatalidadSobre100(){
    let resultado=distanciaFrenadoSobre100*tiempoReaccion*tipoDeSuelo;   
   return resultado
}

if(num==0){
    alert("Ni si quiera te moviste!")
}else{

if(calculoFatalidadBajo100()-distanciaObjeto>=50){
    alert("Moriste")
    alert("Tu distancia de frenado total fue de "+calculoFatalidadBajo100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nuwu" )
    console.log("Tu distancia de frenado total fue de "+calculoFatalidadBajo100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nuwu" )
    
}else if(calculoFatalidadBajo100()-distanciaObjeto<=49){
    alert("Viviste")
    alert("Tu distancia de frenado total fue de "+calculoFatalidadBajo100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nn.n" )
    console.log("Tu distancia de frenado total fue de "+calculoFatalidadBajo100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nn.n" )

}else if(calculoFatalidadSobre100()>50){
    alert("Moriste")
    alert("Tu distancia de frenado total fue de "+calculoFatalidadSobre100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nuwu" )
console.log("Tu distancia de frenado total fue de "+calculoFatalidadSobre100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nuwu" )

}else if(calculoFatalidadSobre100()-distanciaObjeto<49 || calculoFatalidadSobre100()==distanciaObjeto){
    alert("Viviste")
    alert("Tu distancia de frenado total fue de "+calculoFatalidadSobre100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nn.n" )
    console.log("Tu distancia de frenado total fue de "+calculoFatalidadSobre100()+" mts y el objeto estaba a "+distanciaObjeto+" mts.\nn.n" )
}
}

}