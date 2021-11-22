import React, { Component } from "react";
import EmpTable from "./empTable";

class Home extends React.Component {
    state = {
        count: 0,
        employee: {
            empId: 1001,
            empName: "Ram",
            salary: 35000
        },
        employees: [
            {
                empId: 1002,
                empName: "Sam",
                salary: 45000
            },
            {
                empId: 1003,
                empName: "Ravi",
                salary: 55000
            },
            {
                empId: 1004,
                empName: "Raji",
                salary: 65000
            },
        ]

    }
    render() {
        return (
            <div>

                <EmpTable
                    employees={this.state.employees}
                    count={this.state.count}
                    employee={this.state.employee}
                />

            </div>
        );
    }
}

export default Home;