import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from './Alert';
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
                getQuestionsError,
                createQuestionError,
                tenQuestionsReached,
                deleteQuestionError,
                deleteAnswerError,
                reorderQuestionUpError,
                reorderQuestionDownError,
                updateQuestionError,
                updateAnswerError
            }
        } = this.props;
        console.log(questions);

        if (getQuestionsError && !questions.length)
            return <Alert type="fetchQuestions" />;

        const questionnaire = !questions.length ? (
            <Alert type="noQuestions" />
        ) : (
            <>
                {createQuestionError && <Alert type="createQuestion" />}
                {tenQuestionsReached && <Alert type="tenQuestionsReached" />}
                {reorderQuestionUpError && <Alert type="reorderQuestionUp" />}
                {reorderQuestionDownError && (
                    <Alert type="reorderQuestionDown" />
                )}
                {updateQuestionError && <Alert type="updateQuestion" />}
                {updateAnswerError && <Alert type="updateAnswer" />}
                {deleteQuestionError && <Alert type="deleteQuestion" />}
                {deleteAnswerError && <Alert type="deleteAnswer" />}

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
        getQuestionsError: PropTypes.bool.isRequired,
        createQuestionError: PropTypes.bool.isRequired,
        tenQuestionsReached: PropTypes.bool.isRequired,
        deleteQuestionError: PropTypes.bool.isRequired,
        deleteAnswerError: PropTypes.bool.isRequired,
        reorderQuestionUpError: PropTypes.bool.isRequired,
        reorderQuestionDownError: PropTypes.bool.isRequired,
        updateQuestionError: PropTypes.bool.isRequired,
        updateAnswerError: PropTypes.bool.isRequired
    }).isRequired,
    getQuestions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
