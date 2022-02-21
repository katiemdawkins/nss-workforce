// create a function that displays the overall layout of workforce site 
//export to main.js

import { EmployeeInfoHTML } from "./employees/EmployeeList.js"

export const WorkForce = () => {
    return`
        <h1>Small Businesss Workforce</h1>
            <section class="employeeDetails">
             <h3>Employee List</h3>
                ${EmployeeInfoHTML()}
            </section>
    `
}