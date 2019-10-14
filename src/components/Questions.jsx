import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';
import Question from './Question';
import Spinner from './Spinner';
import { getQuestions } from '../store/actions/getQuestions';
import { propTypes } from '../propTypes/questions';

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
                createAnswerError,
                tenQuestionsReached,
                deleteQuestionError,
                deleteAnswerError,
                reorderQuestionUpError,
                reorderQuestionDownError,
                reorderAnswerUpError,
                reorderAnswerDownError,
                updateQuestionError,
                updateAnswerError
            }
        } = this.props;
        console.log(questions);

        if (getQuestionsError && !questions.length)
            return <Alert type="fetchQuestions" />;

        const questionnaire = (
            <>
                {!questions.length && <Alert type="noQuestions" />}
                {createQuestionError && <Alert type="createQuestion" />}
                {(tenQuestionsReached || questions.length === 10) && (
                    <Alert type="tenQuestionsReached" />
                )}
                {createAnswerError && <Alert type="createAnswer" />}
                {reorderQuestionUpError && <Alert type="reorderQuestionUp" />}
                {reorderQuestionDownError && (
                    <Alert type="reorderQuestionDown" />
                )}
                {reorderAnswerUpError && <Alert type="reorderAnswerUp" />}
                {reorderAnswerDownError && <Alert type="reorderAnswerDown" />}
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

Questions.propTypes = propTypes;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
