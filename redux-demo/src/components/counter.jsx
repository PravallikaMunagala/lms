import React, { Component } from 'react';
import { Typography, IconButton, Box } from "@mui/material";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import IndeterminateCheckBoxTwoToneIcon from "@mui/icons-material/IndeterminateCheckBoxTwoTone";
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from " ../actions/counter-actions";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3">Counter Page</Typography>

                <IconButton aria-label="increment" onClick={this.props.incrementAction}>
                    <AddBoxTwoToneIcon />
                </IconButton>
                {this.props.counter}
                <IconButton aria-label="increment" onClick={this.props.decrementAction}>
                    <IndeterminateCheckBoxTwoToneIcon />
                </IconButton>
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

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
    return {
        incrementAction,
        decrementAction,
    };
};
export default connect(mapStateToProps, mapDispatchToProps())(Counter);