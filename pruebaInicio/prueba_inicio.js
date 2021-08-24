var nombre = "Carlos Eduardo";
var apellido = "Vasquez";
var userPlatzi = "CarlosV20";
var edad = 25;
var email = "cevasquezf22@gmail.com";
var mayorEdad = true;
var ahorro = 5000000;
var deudas = 25000000;
var resultado = ahorro - deudas;

console.log(nombre + " " + apellido);
console.log("El dinero real es: " + resultado);

function imprimirNombre(completeName, nickname){
    console.log("Mi nombre es: "+ completeName + ", pero prefiero que me digas " + nickname + ".");
}

var nombre = prompt("Cual es tu nombre");
var apellido = prompt("Cual es tu apeliido");
var nickname = prompt("Cual es tu nickname");
var completeName = (nombre + " " + apellido);

function imprimirNombre(){
    var nombre = prompt("Cual es tu nombre");
    var apellido = prompt("Cual es tu apeliido");
    var nickname = prompt("Cual es tu nickname");
    var completeName = (nombre + " " + apellido);
    console.log("Mi nombre es: "+ completeName + ", pero prefiero que me digas " + nickname + ".");
}


var tipoDeSuscripcion = prompt("Cual es tu tipo de suscripcion a platzi? ");
if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion =="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "Expert+"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante");
}else {
    console.log("Tipo de cuenta no valida")
}

i = 0;
while (i<5){
   i++;
   console.log(i);
}
i = 10;
while(i>=2){
    console.log(i);
    i--;
    
}

var respuesta = Number(prompt("Cuanto es 2+2"));

function suma (){
    var respuesta = Number(prompt("Cuanto es 2+2"));
    if(respuesta === 4){
        alert("felicitaciones");
    } else{
        while(respuesta !=4){
            alert("vuelve a intentar");
            respuesta = Number(prompt("Cuanto es 2+2")); 
        }
        alert("Felicitaciones");
    }
}

const array = [3,6,9,8];
array.forEach(function(array){
    console.log(array);
});

listaPokemones = [];

function pokemon (name,power,type){
    this.name = name;
    this.power = power;
    this.type = type;
}

function crearPokemon (){
    var name = prompt("Cual es el nombre del pokemon: ");
    var power = prompt("Cual es el power de tu pokemon?: ");
    var type = prompt("Cual es el type de tu pokwmon?: ");
    var construirPokemon = new pokemon(name,power,type);
    var agregarPokemon = listaPokemones.push(construirPokemon);
}





