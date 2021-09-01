// funcionaes Helpers
function esPar(numero){
    return (numero%2 ===0);
}

// function esPar(numero){
//     if (numero%2 ===0){
//         return true;
//     }else {
//         return false;
//     }
// }
// Calculando la media aritmetica
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

// Seleccionando solo los salarios de los elementos de la lista
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

// ordenar lista
const salariosColOrdenado = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);

// Mediana salarios
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personaMitad1=lista[mitad-1];
        const personaMitad2=lista[mitad];

        const mediana = calcularMediaAritmetica([
            personaMitad1,
            personaMitad2
        ]);
        return(mediana);
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
const medianaGeneralCol = medianaSalarios(salariosColOrdenado);

// mediana del top 10%
const spliceStart = (salariosColOrdenado.length * 90)/100;
const spliceCount = salariosColOrdenado.length - spliceStart;

const salarioColTop10 = salariosColOrdenado.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});

