const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('parrafito');
const pid=document.getElementById('pid');
const input=document.querySelector('input');
console.log(input.value);
console.log({h1,p,parrafito,pid,input,}); 


h1.innerHTML = 'Modificacion del titulo <br> br sirve para salto de linea ' ; // ( innerHTML)  Propiedad que sirve para modificar 
// el contenido de la etiqueta que seleccionemos. 

h1.innerText = 'Modificacion del titulo <br> br sirve para salto de linea ' ; // (innerText ) Propiedad que sirve para modificar 
// el contenido de la etiqueta que seleccionemos pero en texto plano no lo traduce en HTML. 

// console.log(h1.getAttribute('pantalla')) ; // propiedad (Attribute) sirve para leer atributos (pantalla) que tenemos en HTML

// h1.setAttribute('pantalla' , 'Computador' ) ; // propiedad (setAttribute) sirve para modifiar el elemento del atributo 
// (Televisor por Computador) que tenemos en HTML. 

h1.classList.add ('Computador'); //  classList.add Sirve para agregar un nuevo elemento dentro del atributo (class) .

h1.classList.remove ('Televisor'); //  classList.remove Sirve para eliminar el elemento que deseamos dentro del atributo 
// en este caso de(class) .

input.value = '2121' ; // (.value) sirve para dar un valor predeterminado al input .

const imagen = document.createElement ('img'); // propiedad (document.createElement)  para crear un atributo nuevo en HTML.
// ( en este caso una imagen)

imagen.setAttribute('src', 'https://www.google.com/logos/doodles/2023/seasonal-holidays-2023-6753651837110165-6752733080612631-cst.gif') ;

console.log (imagen); // para imprimir en console la imagen .

pid.innerHTML = ""; // elimina el texto o contenido del atributo (pid ).

pid.append (imagen); // ubicacion de la imagen en HTML , en este caso agrega la imagen despues del contenido que tenemos .





