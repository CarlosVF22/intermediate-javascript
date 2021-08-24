
function calcularPrecioConDescuentos(precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajeConDescuento)/100;

    return precioConDescuento;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento,
// })
