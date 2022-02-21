//this module fetches the computers data from the json server
let computerAppState = {
    computers:[]
}

const API = "http://localhost:8088"

export const fetchComputers = () => {
    return fetch (`${API}/computers`)
    .then(response => response.json())
    .then(
    (computersArray)=>{
        computerAppState.computers = computersArray
    })
}

export const getComputerList = () => {
    const computersList = computerAppState.computers.map(computer =>({...computer}))
    return computersList
}