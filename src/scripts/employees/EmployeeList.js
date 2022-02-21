import { getComputerList } from "../computer/computerData.js";
import { getDepartmentsList } from "../departments/departmentData.js";
import { getEmployeeList } from "./employeeData.js";

// create a function that displays html for list of employees
    //list employees name and age
    //list employees computer info - model and year

const convertItemsToList = (employeeObj) =>{
    const employee = getEmployeeList()
    const computer = getComputerList()
    const department = getDepartmentsList()

    const foundEmployee = employee.find(employee => employee.id === employeeObj.id)
    const foundComputer = computer.find(computer => computer.id === employeeObj.computerId)
    const foundDepartment = department.find(department => department.id === employeeObj.departmentId)

    let html = `
        <header class ="employeeName">
            <h4>${foundEmployee.firstName} ${foundEmployee.lastName}</h4>
        </header>
        <section class="employeeComputer">
            Currently using a ${foundComputer.year} ${foundComputer.model}
        </section>
        <section class="employeeDepartment">
            Works in the ${foundDepartment.name} department
        </section>`

    return html

}

export const EmployeeInfoHTML = () =>{
    const employees = getEmployeeList()

    let html = `
        <div class="employee">
            ${
                employees.map(convertItemsToList).join("")
            }
        </div>
    `
    return html
    
}

