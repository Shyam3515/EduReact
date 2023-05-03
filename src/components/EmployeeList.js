import React from 'react'

export default function EmployeeList() {
    // Each child in a list should have a unique "key" prop.
    const employees = [
        {
            name : "Shyam",
            Country: "India",
            age : "22",
            id : "1"
        },
        {
            name : "Sundar",
            Country: "India",
            age : "22",
            id : "2"
        }   
    ] 
  return (
    <div>
        {
            employees.map((employee)=> {
                
                const {name,Country,age} = employee
                return(
                    // Each child in a list should have a unique "key" prop.
                    <div key = {employee.id}>
                        <h2>{`Name : ${name} age : ${age} Country : ${Country}`}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}
