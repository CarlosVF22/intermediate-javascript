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
function alturaIsosceles (lado,base){
    var altura = Math.sqrt((lado*lado)-(base*base)/4);
    return altura;
}
function calcularAlturaIso(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
}
