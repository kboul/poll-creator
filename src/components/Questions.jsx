import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './Question';
import Spinner from './Spinner';
import { getQuestions } from '../store/actions/getQuestions';

class Questions extends Component {
    componentDidMount() {
        const { getQuestions } = this.props;
        getQuestions();
    }

    render() {
        const {
            questions: {
                questions,
                loading,
                error,
                deleteQuestionError,
                deleteAnswerError
            }
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
            <>
                {deleteQuestionError && (
                    <div className="alert alert-danger mt-2">
                        There was an error while deleting the question.
                    </div>
                )}
                {deleteAnswerError && (
                    <div className="alert alert-danger mt-2">
                        There was an error while deleting the answer.
                    </div>
                )}
                {questions.map(({ prompt, id, order, answers }) => (
                    <Question
                        key={id}
                        id={id}
                        prompt={prompt}
                        order={order}
                        answers={answers}
                    />
                ))}
            </>
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
        error: PropTypes.bool.isRequired,
        deleteQuestionError: PropTypes.bool.isRequired,
        deleteAnswerError: PropTypes.bool.isRequired
    }).isRequired,
    getQuestions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
