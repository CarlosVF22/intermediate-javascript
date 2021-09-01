function InteresCompuesto(capitalInicial,numeroPeriodos,tasaInteres){
    const calculandoInteres = 1+tasaInteres;
    const interesPagado = Math.pow(calculandoInteres,numeroPeriodos);
    const capitalPagado = interesPagado*capitalInicial;
    return capitalPagado;
}
