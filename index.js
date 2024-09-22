// Write your solution in this file!
const employee = {
    name: "Alice",
    streetAddress: "456 Elm St"
};
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {
        ...employee,  
        [key]: value  
    };
};
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(updatedEmployee); 
console.log(employee);


const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;  
    return employee;         
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(employee);

const deleteFromEmployeeByKey = (employee, key) => {
    const { [key]: _, ...newEmployee } = employee; 
    return newEmployee;
}


const updatedEmployeee = deleteFromEmployeeByKey(employee, 'age');
console.log(updatedEmployee); 
console.log(employee);

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]; 
    return employee;      
};

destructivelyDeleteFromEmployeeByKey(employee, 'age');
console.log(employee);