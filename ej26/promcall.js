/* Promises & Callbacks
*
* Nivel 1 Ej 1
*
*/

function myFunction(flag){
    return new Promise((res, rej) => {
        if(flag){
            res("Todo ok!");
        }else{
            rej("Ha habido un error");
        }
    });
}

myFunction(true)
    .then(res => {
        console.log(res);
    })
    .catch(err =>{
        console.log(err);
    });
