import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestions } from '../store/actions';

class Questions extends Component {
    componentDidMount() {
        const { getQuestions } = this.props;
        getQuestions();
    }

    render() {
        const { questions } = this.props;
        console.log(questions);

        return (
            <>
                <div>Questions component</div>
                <div className="offset-md-5">
                    <button type="button" className="btn btn-primary">
                        Add new question
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    questions: state.questions.questions
});

const mapDispatchToProps = {
    getQuestions
};

Questions.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            answers: PropTypes.arrayOf(
                PropTypes.shape({
                    order: PropTypes.number,
                    body: PropTypes.string
                })
            ),
            id: PropTypes.string,
            order: PropTypes.number,
            prompt: PropTypes.string
        })
    ).isRequired,
    getQuestions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
