//this module fetches the computers data from the json server
let computerAppState = []

const API = "http://localhost:8088"

export const fetchComputers = () => {
    return fetch (`${API}/computers`)
    .then(response => response.json())
    .then(
    (computerArray)=>{
        computerAppState = computerArray
    })
}

export const getComputerList = () => {
    const computersList = computerAppState.map(computer =>({...computer}))
    return computersList
}