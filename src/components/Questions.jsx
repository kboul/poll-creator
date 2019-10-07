import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import { getQuestions } from '../store/actions';

class Questions extends Component {
    componentDidMount() {
        const { getQuestions } = this.props;
        getQuestions();
    }

    render() {
        const {
            questions: { questions, loading, error }
        } = this.props;
        console.log(questions);

        if (error && !questions.length)
            return (
                <div className="alert alert-danger mt-2">
                    There was an error while fetching the questions.
                </div>
            );

        const questionnaire = !questions.length ? (
            <div className="alert alert-warning mt-2">
                No questions have been created yet.
            </div>
        ) : (
            <div>Questions component</div>
        );

        return loading ? <Spinner /> : questionnaire;
    }
}

const mapStateToProps = state => ({
    questions: state.questions
});

const mapDispatchToProps = {
    getQuestions
};

Questions.propTypes = {
    questions: PropTypes.shape({
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
        loading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired
    }).isRequired,
    getQuestions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
