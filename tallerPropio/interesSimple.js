function InteresSimple(capitalInicial,numeroPeriodos,tasaInteres){
    const interesSimple = tasaInteres;
    const interesPagado = interesSimple*numeroPeriodos*capitalInicial;
    return interesPagado;
}
