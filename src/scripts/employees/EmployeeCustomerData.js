const employeeCustomerAppState = {
    employeeCustomers:[]
}

const API = "http://localhost:8088"

export const fetchEmployeeCustomers = () => {
    return fetch (`${API}/employeeCustomers`)
    .then (response => response.json())
    .then (
        (employeeCustomerArray) => {
            employeeCustomerAppState.employeeCustomers = employeeCustomerArray
        }
    )
}

export const getEmployeeCustomers = () => {
    return employeeCustomerAppState.employeeCustomers.map(employeeCustomer => ({...employeeCustomer}))
}