/* Promises & Callbacks
*
* Nivel 1 Ej 2
*
*/

((flag, callback) => {
    let msg;
    if(flag){
        msg = "That was true";
    }else{
        msg = "That was false";
    }
    callback(msg);
})(false, printMsg);

function printMsg(msg){
    console.log(msg);
}
