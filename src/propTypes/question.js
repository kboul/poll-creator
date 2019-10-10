import PropTypes from 'prop-types';

export const propTypes = {
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            order: PropTypes.number,
            body: PropTypes.string
        })
    ).isRequired,
    id: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    prompt: PropTypes.string.isRequired,
    updateQuestion: PropTypes.func.isRequired,
    reorderQuestionUp: PropTypes.func.isRequired,
    reorderQuestionDown: PropTypes.func.isRequired,
    createAnswer: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired
};
