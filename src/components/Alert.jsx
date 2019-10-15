import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type }) => {
    let message = 'There was an error while ';
    let alert = 'danger';

    switch (type) {
        case 'fetchQuestions':
            message += 'fetching the questions.';
            break;
        case 'createQuestion':
            message += 'creating the question.';
            break;
        case 'tenQuestionsReached':
            message = 'You cannot add more than 10 questions.';
            alert = 'warning';
            break;
        case 'createAnswer':
            message += 'creating the answer.';
            break;
        case 'noQuestions':
            message = 'No questions have been created yet.';
            alert = 'warning';
            break;
        case 'deleteQuestion':
            message += 'deleting the question.';
            break;
        case 'deleteAnswer':
            message += 'deleting the answer.';
            break;
        case 'reorderQuestionUp':
            message += 'reordering the question up.';
            break;
        case 'reorderQuestionDown':
            message += 'reordering the question down.';
            break;
        case 'updateQuestion':
            message += 'updating the question.';
            break;
        case 'updateAnswer':
            message += 'updating the answer.';
            break;
        case 'reorderAnswernUp':
            message += 'reordering the answer up.';
            break;
        case 'reorderAnswernDown':
            message += 'reordering the answer down.';
            break;
        default:
            return;
    }

    return <div className={`alert alert-${alert} mt-2`}>{message}</div>;
};

Alert.propTypes = {
    type: PropTypes.string.isRequired
};

export default Alert;
