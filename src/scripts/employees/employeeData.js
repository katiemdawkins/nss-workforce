//this module fetches the employee data from the json server
let employeeAppState = []

const API = "http://localhost:8088"

export const fetchEmployees = () => {
    return fetch (`${API}/employees`)
    .then(response => response.json())
    .then(
    (employeeList)=>{
        employeeAppState = employeeList
    })
}

export const getEmployeeList = () => {
    const employeesList = employeeAppState.map(employee =>({...employee}))
    return employeesList
}