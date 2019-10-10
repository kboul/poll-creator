import PropTypes from 'prop-types';

export const propTypes = {
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
        createAnswerError: PropTypes.bool.isRequired,
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
