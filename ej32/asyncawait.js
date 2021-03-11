/* Async / Await
*
* Nivel 2 Ej 1
*
*/

function response(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Conexión exitosa!');
        }, 2000);
    });
}

async function connectServer(){
    try{
        
        console.log("Conectando con el servidor...");
        let msg = await response();
        console.log(msg);

    }catch(e){
        console.log(e);
    }
}

connectServer();