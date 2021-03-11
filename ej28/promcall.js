/* Promises & Callbacks
*
* Nivel 2 Ej 1
*
*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmpleado = (employees, _id) => {
    return new Promise((res, rej) => {
        if(employees != null && salaries != null){
            employees.forEach(employee => {
                if(employee.id == _id){
                    res(employee);
                }
            });
        }else{
            rej("No se han encontrado los datos.");
        }
    });
}

getEmpleado(employees, 1)
    .then((myEmployee) => {
            console.log(`El empleado es: ${myEmployee.name}`);
    })
    .catch(err => console.log(err));
