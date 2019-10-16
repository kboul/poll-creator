import React from 'react';
import PropTypes from 'prop-types';
import { alerts } from '../alerts';

const Alert = ({ type }) => {
    let message = 'There was an error while ';
    let alert = 'danger';

    switch (type) {
        case alerts.getQuestions:
            message += 'fetching the questions.';
            break;
        case alerts.noQuestions:
            message = 'No questions have been created yet.';
            alert = 'warning';
            break;
        case alerts.tenQuestionsReached:
            message = 'You cannot add more than 10 questions.';
            alert = 'warning';
            break;
        case alerts.createQuestion:
            message += 'creating the question.';
            break;
        case alerts.createAnswer:
            message += 'creating the answer.';
            break;
        case alerts.reorderQuestionUp:
            message += 'reordering the question up.';
            break;
        case alerts.reorderQuestionDown:
            message += 'reordering the question down.';
            break;
        case alerts.updateQuestion:
            message += 'updating the question.';
            break;
        case alerts.updateAnswer:
            message += 'updating the answer.';
            break;
        case alerts.reorderAnswerUp:
            message += 'reordering the answer up.';
            break;
        case alerts.reorderAnswerDown:
            message += 'reordering the answer down.';
            break;
        case alerts.deleteQuestion:
            message += 'deleting the question.';
            break;
        case alerts.deleteAnswer:
            message += 'deleting the answer.';
            break;
        default:
            console.log('Nothing was returned from Alert');
            return;
    }

    return <div className={`alert alert-${alert} mt-2`}>{message}</div>;
};

Alert.propTypes = {
    type: PropTypes.string.isRequired
};

export default Alert;
