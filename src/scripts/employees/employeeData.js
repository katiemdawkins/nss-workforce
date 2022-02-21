//this module fetches the employee data from the json server
let employeeAppState = {
    employees:[]
}

const API = "http://localhost:8088"

export const fetchEmployees = () => {
    return fetch (`${API}/employees`)
    .then(response => response.json())
    .then(
    (employeeArray)=>{
        employeeAppState.employees = employeeArray
    })
}

export const getEmployeeList = () => {
    const employeesList = employeeAppState.employees.map(employee =>({...employee}))
    return employeesList
}