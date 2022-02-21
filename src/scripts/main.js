import { WorkForce } from "./workforce.js";

//import all fetch calls and invoke 
import { fetchComputers } from "./computer/computerData.js";
import { fetchEmployees } from "./employees/employeeData.js";
import { fetchDepartments } from "./departments/departmentData.js";
import { fetchCustomers } from "./customers/CustomerData.js";
import { fetchEmployeeCustomers } from "./employees/EmployeeCustomerData.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchComputers()
    .then(fetchEmployees)
    .then(fetchDepartments)
    .then(fetchCustomers)
    .then(fetchEmployeeCustomers)
    .then(
        () => {
            mainContainer.innerHTML = WorkForce()
        }
    )
}

renderHTML()