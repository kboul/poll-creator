import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';
import Question from './Question';
import Spinner from './Spinner';
import { getQuestions } from '../store/actions/getQuestions';
import { propTypes } from '../propTypes/questions';
import { alerts } from '../alerts';

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
            return <Alert type={alerts.getQuestions} />;

        const questionnaire = (
            <>
                {!questions.length && <Alert type={alerts.noQuestions} />}
                {createQuestionError && <Alert type={alerts.createQuestion} />}
                {(tenQuestionsReached || questions.length === 10) && (
                    <Alert type={alerts.tenQuestionsReached} />
                )}
                {createAnswerError && <Alert type={alerts.createAnswer} />}
                {reorderQuestionUpError && (
                    <Alert type={alerts.reorderQuestionUp} />
                )}
                {reorderQuestionDownError && (
                    <Alert type={alerts.reorderQuestionDown} />
                )}
                {reorderAnswerUpError && (
                    <Alert type={alerts.reorderAnswerUp} />
                )}
                {reorderAnswerDownError && (
                    <Alert type={alerts.reorderAnswerDown} />
                )}
                {updateQuestionError && <Alert type={alerts.updateQuestion} />}
                {updateAnswerError && <Alert type={alerts.updateAnswer} />}
                {deleteQuestionError && <Alert type={alerts.deleteQuestion} />}
                {deleteAnswerError && <Alert type={alerts.deleteAnswer} />}

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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
