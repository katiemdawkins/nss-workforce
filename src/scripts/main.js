// import function from workforce.js and invoke
import { WorkForceHTML } from "./workforce.js";
//import all fetch calls and invoke 
import { fetchComputers } from "./computer/computerData.js";
import { fetchEmployees } from "./employees/employeeData.js";

const mainContainer = document.querySelector("#container")



const renderHTML = () => {
    fetchComputers()
    .then(fetchEmployees)
    .then(
        () =>{
            mainContainer.innerHTML = WorkForceHTML()
        }
    )
}

renderHTML()