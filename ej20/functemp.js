/* Functions & Template Literals
*
* Nivel 3 Ej 1
*
*/

const arr = [];

for(let i = 0 ; i < 10 ; i++){
    arr[i] =  function() { for(let i = 0 ; i < 10 ; i++) console.log(i); };
}

for(let i = 0 ; i < arr.length ; i++){
    arr[i]();
}
