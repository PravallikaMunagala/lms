import axios from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Readers extends React.Component {
    state = {
        readers: [],
        reader: {},
    };
    componentDidMount() {
        axios
            .get("http://localhost:8080/lms/viewuserslist")
            .then((responses) => {
                console.log(response);
                this.setStste({ readers: response.data })
            })
            .catch((error) => console.log(error));
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Password</th>
                            <th>MobileNo</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.readers.map((reader) => (
                            <tr>
                                <td>{reader.id}</td>
                                <td>{reader.firstName}</td>
                                <td>{reader.lastName}</td>
                                <td>{reader.password}</td>
                                <td>{reader.mobileno}</td>
                                <td>{reader.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Readers;