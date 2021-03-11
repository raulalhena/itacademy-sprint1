/* Classes & Arrow Functions
*
* Nivel 2 Ej 2
*
*/
class Persona {
    constructor(name){
        this.name = name;
    }

    decirNombre(){
        console.log(this.name);
    }
}

const persona = new Persona('Raül');
persona.decirNombre();
