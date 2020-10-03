import types from './types';
import httpService from '../../services/httpService';
import orderAnswerDown from '../../utils/orderAnswerDown';

/**
 *
 * @param {string} id - question id
 * @param {number} order - answer order
 * @returns {Redux action}
 */

const reorderAnswerDown = (id, order) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const answers = orderAnswerDown(questions, id, order);
            // prettier-ignore
            const data = {
                "answers": [...answers]
            }

            await httpService.put(`/api/questions/${id}?debug=true`, data);

            dispatch({
                type: types.REORDER_ANSWER_DOWN_SUCCESS,
                id,
                payload: answers
            });
        } catch (error) {
            console.log(
                'There was an error while reordering down the answer',
                error
            );
            dispatch({ type: types.REORDER_ANSWER_DOWN_FAIL });
            setTimeout(
                () =>
                    dispatch({ type: types.REORDER_ANSWER_DOWN_REVERT_ALERT }),
                2000
            );
        }
    };
};

export default reorderAnswerDown;
