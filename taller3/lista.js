lista =[];
function AgregarElementosLista(elemento){
    const agregarElemento = lista.push(elemento);
    return agregarElemento;

}
function EliminarElementosLista(){
    const eliminarElemento = lista.pop();
    return eliminarElemento;
}

function agregarElementoButton(){
    const inputAgregarElemento = document.getElementById("agregarElementoInput");
    const inputElemento = inputAgregarElemento.value;
    const inputElementoNumber = Number(inputElemento);

    const elementoAgregado = AgregarElementosLista(inputElementoNumber);
    const elementoAgregadoHTML = document.getElementById("elementoAgregado");
    const listaHTML = document.getElementById("listaHTML");
    listaHTML.innerText = lista;

    const mediaAritmetica = calcularMediaAritmetica(lista);
    const mediaAritmeticaHTML = document.getElementById("MediaAritmeticaHTML");
    mediaAritmeticaHTML.innerText="La media aritmetica de la lista actual es :" + mediaAritmetica;

    const Mediana = EncontrarMediana(lista);
    const MedianaHTML = document.getElementById("MedianaHTML");
    MedianaHTML.innerText="La mediana de la lista actual es :" + Mediana;

    const moda = calcularModa(lista);
    const modaHTML = document.getElementById("modaHTML");
    modaHTML.innerText="La moda(primer numero es el digito de la moda y el segundo es la cantidad de veces que se repite) de la lista actual es :" + moda;

    const mediaGeometrica = CalcularMediaGeometrica(lista);
    const mediaGeometricaHTML = document.getElementById("mediaGeometrica");
    mediaGeometricaHTML.innerText="La media geometrica es: " + mediaGeometrica;

}

function eliminarElementoButton(){
    const elementoEliminado = EliminarElementosLista();
    const listaHTML = document.getElementById("listaHTML");
    listaHTML.innerText = lista;

    const mediaAritmetica = calcularMediaAritmetica(lista);
    const mediaAritmeticaHTML = document.getElementById("MediaAritmeticaHTML");
    mediaAritmeticaHTML.innerText="La media aritmetica de la lista actual es :" + mediaAritmetica;

    const Mediana = EncontrarMediana(lista);
    const MedianaHTML = document.getElementById("MedianaHTML");
    MedianaHTML.innerText="La mediana de la lista actual es :" + Mediana;

    const moda = calcularModa(lista);
    const modaHTML = document.getElementById("modaHTML");
    modaHTML.innerText="La moda(primer numero es el digito de la moda y el segundo es la cantidad de veces que se repite) de la lista actual es :" + moda;

    const mediaGeometrica = CalcularMediaGeometrica(lista);
    const mediaGeometricaHTML = document.getElementById("mediaGeometrica");
    mediaGeometricaHTML.innerText="La media geometrica es: " + mediaGeometrica;

}
