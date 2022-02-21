//this module fetches the employee data from the json server
let departmentAppState = {
    departments:[]
}

const API = "http://localhost:8088"

export const fetchDepartments = () => {
    return fetch (`${API}/departments`)
    .then(response => response.json())
    .then(
    (departmentArray)=>{
        departmentAppState.departments = departmentArray
    })
}

export const getDepartmentsList = () => {
    const departmentsList = departmentAppState.departments.map(department =>({...department}))
    return departmentsList
}