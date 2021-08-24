// Codigo del cuadrado
console.group("Cuadrados") //para agrupar en consola

function perimetroCuadrado(lado) {
    return lado *4;
}

function areaCuadrado (lado){
    return lado*lado;
}

console.groupEnd();

// Triangulo 
console.group("Triangulos") //para agrupar en consola

function perimetroTriangulo(lado1,lado2,base){
    lado1 = Number(lado1);
    lado2 = Number(lado2);
    base = Number(base);
    return (lado1+lado2+base)
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.groupEnd(); //siempre cerrar el console.group()

// circulos
console.group("Circulos");
pi = Math.PI

function diametroCirculo (radio) {
    return radio*2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo (radio){
    return (radio*radio)*pi;
}

console.groupEnd(); //siempre cerrar el console.group()

// interactuamos con el HTML --------
// cuadrados

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert("El area del cuadrado es: "+area+ "cm2");
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: "+perimetro + "cm")
}

// triangulo
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBase");
    const base = inputBase.value;
    const inputAltura = document.getElementById("inputAltura")
    const altura = inputAltura.value;

    const AreaTringulo = areaTriangulo(base,altura);
    alert("el area del triangulo es" + AreaTringulo);
}

function calcularPerimetroTriangulo(){
    const inputTriangulo1 = document.getElementById("inputTriangulo1");
    const triangulo1 = inputTriangulo1.value;
    const inputTriangulo2 = document.getElementById("inputTriangulo2")
    const triangulo2 = inputTriangulo2.value;
    const inputBase = document.getElementById("inputBase")
    const base = inputBase.value;

    const PerimetroTriangulo = perimetroTriangulo(triangulo1,triangulo2,base);
    alert("el area del triangulo es " + PerimetroTriangulo);
}
// circulos

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const AreaCirculo = areaCirculo(value);
    alert(AreaCirculo)
}
function calcularCircuCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}
function calcularDiametro(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    
    const diametro = diametroCirculo(value);
    alert(diametro);
}

// Calcular altura triangulo isosceles
function alturaIsosceles (lado1Grande,lado2Grande,baseGrande){
    if(lado1Grande!=lado2Grande){
        console.error("Los lados 1 y 2 no son iguales");
    }else{
        let ladoAltura;
        const lado1Pequeño = lado1Grande;
        const lado2Pequeño = baseGrande/2;
        const lado1PequeñoCuadrado = lado1Pequeño*lado1Pequeño;
        const lado2PequeñoCuadrado = lado2Pequeño*lado2Pequeño;
        ladoAltura = Math.sqrt(lado1PequeñoCuadrado-lado2PequeñoCuadrado);

        const trianguloGrandeAltura = ladoAltura
        return trianguloGrandeAltura;
    }
}

function calcularAlturaIso(){
    const input1 = document.getElementById("inputTriangulo1Iso");
    const lado1Grande = input1.value;
    const input2 = document.getElementById("inputTriangulo2Iso");
    const lado2Grande = input2.value;
    const inputB = document.getElementById("inputBaseIso");
    const baseGrande = inputB.value;

    const alturaIso = alturaIsosceles(lado1Grande,lado2Grande,baseGrande);
    alert(alturaIso);
}
