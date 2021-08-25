// Calcular media calcularMediaAritmetica(Promedio)

function calcularMediaAritmetica(lista){
    // let sumaLista = 0
    // for (let i = 0; i <lista.length;i++){
    //     sumaLista1 = sumaLista1 + lista1[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}