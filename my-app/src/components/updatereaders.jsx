import axios from "axios";
import React, { Component } from 'react';

class UpdateReaders extends React.Component {
    state = {
        readers: {
            firstName: "",
            lastName: "",
            password: "",
            mobileno: "",
            email: "",
        },
    };
    componentDidMount() {
        axios.get(`http://localhost:8080/lms/viewreaderbyid/${this.props.match.params.id}`)
            .then((response) => {

                console.log(response.data);
                this.setState({ readers: response.data });

            })
            .catch((error) => console.log(error));
    }

    handleChange = (event) => {
        const readers = { ...this.state.readers };
        readers[event.target.name] = event.target.value;
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ readers: readers });
    };
    handleSubmit = (event) => {
        event.preventdefault();
        console.log("handleSubmit");

        axios
            .put(`http://localhost:8080/lms/updateReader/${this.props.match.params.id}`, this.state.readers)
            .then((response) => {
                this.props.history.push("/readers");
            })
            .catch((error) => console.log(error));
    };


    render() {
        return (

            <div>
                <h1>Update Readers </h1>
                <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
                    <div className="mb-3">
                        <label for="exampleInputFirstName" className="form-label">
                            FirstName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputFirstName"
                            aria-describedby="emailHelp"
                            value={this.state.readers.firstName}
                            name="firstName"
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputLastName" className="form-label">
                            LastName
                        </label>
                        <input type="text" className="form-control"
                            id="exampleInputLastName"
                            value={this.state.readers.lastName}
                            name="lastName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control"
                            id="exampleInputPassword1"
                            value={this.state.readers.password}
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputMobileNo" className="form-label">
                            MobileNo
                        </label>
                        <input type="tel" className="form-control"
                            id="exampleInputMobileNo"
                            value={this.state.readers.mobileno}
                            name="mobileno"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={this.state.readers.email}
                            name="email"
                            onChange={this.handleChange}
                        />
                    </ div>
                    <div className="d-grid gap-2">
                        <input type="submit" className="btn btn-primary" />

                    </ div>
                </form>

            </div>
        );

    }
}


export default UpdateReaders;