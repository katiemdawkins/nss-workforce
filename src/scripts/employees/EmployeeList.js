import { getComputerList } from "../computer/computerData.js";
import { getDepartmentsList } from "../departments/departmentData.js";
import { getEmployeeList } from "./employeeData.js";
import { getCustomers } from "../customers/CustomerData.js";
import { getEmployeeCustomers } from "./EmployeeCustomerData.js";

// create a function that displays html for list of employees
    //list employees name and age
    //list employees computer info - model and year

const convertEmployeesToList = (employeeObj) =>{
    const employees = getEmployeeList()
    const computers = getComputerList()
    const departments = getDepartmentsList()
    

    const foundComputer = computers.find(computer => computer.id === employeeObj.computerId)
    const foundEmployee = employees.find(employee => employee.id === employeeObj.id)
    const foundDepartment = departments.find(department => department.id === employeeObj.departmentId)
    
    
    let html = `
    <header class ="employeeName">
    <h4>${foundEmployee.firstName} ${foundEmployee.lastName}</h4>
    </header>
    <section class="employeeComputer">
        Currently using a ${foundComputer.year} ${foundComputer.model}
    </section>
    <section class="employeeDepartment">
        Works in the ${foundDepartment.name} department
    </section>
    <section class="employeeCustomers">
        Has worked for the following customers:
        ${EmployeeList()}
    </section>`
        
        return html

        
}
    
const EmployeeList = () =>{
    const employees = getEmployeeList()
    const customers = getCustomers()
    const customerRelationships = getEmployeeCustomers()
    
        let html = "<ul>"
        
        html += `<li>
            ${
                employees.map(employee => {
                    const relationships = customerRelationships.filter(employee => {
                        return customerRelationships.employeeId === employees.id
                    })

                    const assignedCustomers = relationships.map (relationship => {
                        return customers.find(customer => relationship.customerId === customers.id)
                    })
                }).join("")
            }
        </li>`

        html += "</ul>"
        return html

}

export const EmployeeInfoHTML = () =>{
    const employees = getEmployeeList()

    let html = `
        <div class="employee">
            ${
                employees.map(convertEmployeesToList).join("")
            }
        </div>
    `
    return html
    
}



