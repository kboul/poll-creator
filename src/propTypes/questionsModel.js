import PropTypes from 'prop-types';

const questionsModel = {
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
    ).isRequired
};

export default questionsModel;
