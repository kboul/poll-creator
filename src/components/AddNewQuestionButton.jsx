import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createQuestion } from '../store/actions/createQuestion';

const AddNewQuestionButton = ({ createQuestion }) => {
    return (
        <div className="offset-md-5">
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => createQuestion()}>
                Add new question
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    createQuestion
};

AddNewQuestionButton.propTypes = {
    createQuestion: PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(AddNewQuestionButton);
