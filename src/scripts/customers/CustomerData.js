let customerAppState = {
    customers: []
}

const API = "http://localhost:8088"

export const fetchCustomers = () => {
    return fetch (`${API}/customers`)
    .then(response => response.json())
    .then(
        (customerArray) => {
            customerAppState.customers = customerArray
        }
    )
}

export const getCustomers = () => {
    return customerAppState.customers.map(customer => ({...customer}))
}