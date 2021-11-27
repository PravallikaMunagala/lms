import React, { Component } from "react";
import { connect } from "react-redux";

class Test extends React.Component {
    render() {
        return (
            <div>
                <h3>Test Page</h3>
                {this.props.counter}
            </div>
        );
    }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

// // function to dispatch actions
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementAction,
//     decrementAction,
//   };
// };

export default connect(mapStateToProps)(Test);