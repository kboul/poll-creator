import PropTypes from 'prop-types';
import { questionsModel } from './questionsModel';

export const propTypes = {
    questions: PropTypes.shape({
        ...questionsModel,
        loading: PropTypes.bool.isRequired,
        getQuestionsError: PropTypes.bool.isRequired,
        createAnswerError: PropTypes.bool.isRequired,
        createQuestionError: PropTypes.bool.isRequired,
        tenQuestionsReached: PropTypes.bool.isRequired,
        deleteQuestionError: PropTypes.bool.isRequired,
        deleteAnswerError: PropTypes.bool.isRequired,
        reorderQuestionUpError: PropTypes.bool.isRequired,
        reorderQuestionDownError: PropTypes.bool.isRequired,
        reorderAnswerUpError: PropTypes.bool.isRequired,
        updateQuestionError: PropTypes.bool.isRequired,
        updateAnswerError: PropTypes.bool.isRequired
    }).isRequired,
    getQuestions: PropTypes.func.isRequired
};
