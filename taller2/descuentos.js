function calcularPrecioConDescuentos(precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajeConDescuento)/100;

    return precioConDescuento;
}

function calcularPrecioPagar(){
    const inputPrecio = document.getElementById("precioOriginal");
    const PrecioValue = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    const descuentoValue = inputDescuento.value;

   const precioConDescuento = calcularPrecioConDescuentos(PrecioValue, descuentoValue);
   const resultPrice = document.getElementById("resultPrice");
   resultPrice.innerText = "El precio con descuento es: $"+precioConDescuento; 

}

//Resultado propio
// habilitar cupones
function habilitarCupones (numero){
    const numeroInferior = 50;
    const numeroSuperior = 100;
    if (numero >=numeroInferior && numero<=numeroSuperior){
        console.log("numeroValido");
        const randomdescuento = Math.random() * (20 - 10) + 10;
        const descuento = Math.round(randomdescuento);
        return descuento;
    
    }else{
        console.log("numeroNoValido");
        const descuento = 0;
        return descuento;
        
    }
}

// Calcular el precio con el cupon
function calcularPrecioCupon(){
    const inputCupon = document.getElementById("numeroCupon");
    const cuponValue = inputCupon.value;
    const inputPrecioCupon = document.getElementById("precio");
    const precioValue = inputPrecioCupon.value;

    const descuentoCupon = habilitarCupones(cuponValue);
    const precioCupon = calcularPrecioConDescuentos(precioValue,descuentoCupon);
    const resultadoCupon = document.getElementById("resultadoCupon");
    resultadoCupon.innerText = "El precio a pagar es: $"+precioCupon; 

    const valorDescuentoCupon = document.getElementById("valorDescuentoCupon");
    valorDescuentoCupon.innerText = "tu descuento fue de : " + descuentoCupon; 
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento,
// })
