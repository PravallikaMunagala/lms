import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Readers extends React.Component {
    state = {
        readers: [],
    };
    componentDidMount() {
        axios.get("http://localhost:8080/lms/viewreaderlist")
            .then((response) => {
                console.log(response);
                this.setState({ readers: response.data });
            })
            .catch((error) => console.log(error));
    }
    handleDelete = (id) => {
        axios.delete(`http://localhost:8080/lms/deleteReader/${id}`).then((response) => {
            const readers = this.state.readers.filter((reader) => reader.id != id);
            this.setState({ readers: readers });
        });
    };
    render() {
        return (
            <div className="container">
                <Link
                    to="/readers/add"
                    className="btn btn-primary float-end my-3">
                    Add
                </Link>
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
                            <tr key={reader.id}>
                                <td>{reader.id}</td>
                                <td>{reader.firstName}</td>
                                <td>{reader.lastName}</td>
                                <td>{reader.password}</td>
                                <td>{reader.mobileno}</td>
                                <td>{reader.email}</td>
                                <td>
                                    <Link to={`/update/readers/${reader.id}`}>
                                        <input
                                            type="button"
                                            value="Update"
                                            className="btn btn-secondary me-2"
                                        />
                                    </Link>

                                    <input
                                        type="button"
                                        value="Delete"
                                        className="btn btn-outline-danger"
                                        onClick={() => this.handleDelete(reader.id)} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Readers;