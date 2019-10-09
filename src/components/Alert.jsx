import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type }) => {
    let message;

    switch (type) {
        case 'fetchQuestions':
            message = 'fetching the questions';
            break;
        case 'noQuestions':
            message = 'No questions have been created yet.';
            break;
        case 'deleteQuestion':
            message = 'deleting the question';
            break;
        case 'deleteAnswer':
            message = 'deleting the answer';
            break;
        default:
            return;
    }

    return (
        <div
            className={`alert alert-${
                type === 'noQuestions' ? 'warning' : 'danger'
            } mt-2`}>
            {type === 'noQuestions'
                ? message
                : `There was an error while ${message}.`}
        </div>
    );
};

Alert.propTypes = {
    type: PropTypes.string.isRequired
};

export default Alert;