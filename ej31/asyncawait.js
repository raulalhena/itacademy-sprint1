/* Async / Await
*
* Nivel 1 Ej 2
*
*/

function serverRepository(){

    let data = [];

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

    return data = [employees, salaries];

}

async function getEmployeeInfo(id){
    try{
        
        const data = await serverRepository();
        const [ employees, salaries ] = data;
    
        let salary, employee;

        employee = employees.find(obj => obj.id == id);
        salary = salaries.find(obj => obj.id == id);

        if(employees != null && salary != null){
            console.log(`El nombre de empleado es: ${employee.name} y su salario es: ${salary.salary}`);
        }else{
            throw "No se han encontrado los datos del empleado";
        }

    }catch(e){
        console.log(e);
    }
}

getEmployeeInfo(1)