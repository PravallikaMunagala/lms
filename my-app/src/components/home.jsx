import React, { Component } from "react";
import EmpTable from "./emptable";

class Home extends React.Component {
    state = {
        count: 0,
        employee: {
            empId: 1,
            empName: "Pravallika",
            salary: 35000,
        },
        employees: [
            {
                empId: 2,
                empName: "Sam",
                salary: 45000
            },
            {
                empId: 3,
                empName: "Pooja",
                salary: 55000
            },
            {
                empId: 4,
                empName: "Asha",
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