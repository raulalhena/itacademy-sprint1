/* Classes & Arrow Functions
*
* Nivel 3 Ej 1
*
*/

let miObj, miObj2, miObj3;

miObj = newObject('Raül', 'López', 'Male');
miObj2 = new newObject('Raül', 'López', 'Male');
miObj3 = newObject.call(miObj3, 'Raül', 'López', 'Male');

console.log(miObj);
console.log(miObj2);
console.log(miObj3);

function newObject(name, surname, gender){
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    return this;
}