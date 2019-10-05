import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../store/actions';

class Questions extends Component {
    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        console.log(this.props);
        return <div>Questions component</div>;
    }
}

const mapStateToProps = state => ({
    questions: state.questions
});

const mapDispatchToProps = {
    getQuestions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
