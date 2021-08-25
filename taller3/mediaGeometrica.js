function CalcularMediaGeometrica (lista){
    const MultiplicaElementosLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado * nuevoElemento
        }
    );
    const valorMediaGeometria = Math.pow(MultiplicaElementosLista, (1/lista.length));
    return valorMediaGeometria;
}