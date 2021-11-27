import React, { Component } from 'react';
import axios from 'axios';

class Read extends React.Component {

    handleSubmit = (event) => {
        event.preventdefault();
        console.log("handleSubmit");
        axios
            .post("http://localhost:8080/lms/register", this.state.readers)
            .then((response) => {
                this.props.history.push("/readers");
            })
            .catch((error) => console.log(error));
    };

    render() {

        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>;
    }
}

export default Read;