const h1 = document.querySelector('h1')
const ul = document.querySelector('.ul');

const UnItemLi = document.createElement('li');

UnItemLi.textContent = 'PRIMER LIST';
//UnItemLi.innerHTML = "<li>PRIMER LIST</li>";
ul.append(UnItemLi);

//const agregarALi  = prompt('agregue a la lista');
//const agregarALi2  = prompt('agregue a la lista');

//ul.append(agregarALi);
//ul.append(agregarALi2);

h1.textContent = 'HELLO WORLD';




function multiplicarPorDos(m){
  console.log('El resultado de la multiplicación es:', m * 2);
}

let numero2 = 55;

//multiplicarPorDos(numero2); 

const multiplicarPorTres = n => {n* 3
//console.log(`El resultado de multiplicar ${n} por 3 es:`, n * 3);
//alert('El resultado de la multiplicación es:'+ " " + n * 3);

};

//let num1 = 3;
//multiplicarPorDos(5);

//multiplicarPorTres(51);


class Comidas{
  constructor(id, nombre){
    this.id = id;
    this.nombre = nombre;

  }

  getId = function(){
    return this.id;
  }
  setId = function(newId){
    this.id = id;
  }
  toString (){
    console.log(`Comida n°: ${this.id} - Nombre: ${this.nombre}`);
  }
}

const comidas = [];

const comida1 = new Comidas(0,"Choclo");
comidas.push(comida1);
const comida2 = new Comidas(1,"Milanesa");
comidas.push(comida2);
const comida3 = new Comidas(2,"Chocolate");
comidas.push(comida3);

mostrarComidas = function(){
  //const arrayDeComida = comidas;
  for(let i = 0; i < comidas.length; i++){
    const comida = comidas[i];
    comida.toString();

  }
    
}

//mostrarComidas();

function encontrarComida(buscado){
  for(let i = 0; i < comidas.length; i++){
    const comida = comidas[i];
    if(buscado === comida.nombre){
      console.log(buscado +" "+ `coincide con ${comida.nombre}`)
      return;
    }
    

  }
  console.log(`No hay coincidencia`)
}
//const escribirComida = prompt('Escriba una comida')
//encontrarComida(escribirComida);





