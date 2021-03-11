/* Promises & Callbacks
*
* Nivel 2 y 3 Ej 3 y 1. Fusionados, ya que ya lo había implementado en los anteriores.
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
            rej("No se han encontrado los datos de Empleados.");
        }
    });
}

let getSalario = (myEmployee, salaries) => {
    return new Promise((res, rej) => {
        if(myEmployee != null && salaries != null){
            salaries.forEach(salary => {
                if(myEmployee.id == salary.id){
                    res(salary);
                }
            });
        }else{
            rej("No se han encontrado los datos de Salarios.");
        }
    });
}

getEmpleado(employees, 1)
    .then(myEmployee => {
            console.log(`El empleado es: ${myEmployee.name}`);
            return getSalario(myEmployee, salaries);
    })
    .then(mySalary => {
        console.log(`El salario es: ${mySalary.salary}`);
    })
    .catch(err => console.log(err));
