import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import createQuestion from '../store/actions/createQuestion';
import questionsModel from '../propTypes/questionsModel';

const borderRadius = { borderRadius: '20px' };

const AddNewQuestionButton = ({ questions, createQuestion }) => {
    return (
        <div className="offset-md-5 mb-4">
            <button
                type="button"
                style={borderRadius}
                disabled={questions.length === 10}
                className="btn btn-primary"
                onClick={() => createQuestion()}>
                Add new question
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    questions: state.questions.questions
});

const mapDispatchToProps = { createQuestion };

AddNewQuestionButton.propTypes = {
    ...questionsModel,
    createQuestion: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewQuestionButton);
