const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');const pResult=document.querySelector('#result');

btn.addEventListener('click', btnOnClick) // atributo ddEventListener : sirve para escichar los eventos.

function btnOnClick(){
   const sumaInputs=input1.value+input2.value;
    //const sumaInputs= Number (input1.value) + Number ( input2.value) ; // Number : propiedad para convertir texto a numero 
        pResult.innerText="Resultado: " + sumaInputs;
    
    }


    

  

