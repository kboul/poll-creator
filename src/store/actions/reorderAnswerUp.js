/* eslint-disable no-param-reassign */
import { types } from './types';
import httpService from '../../services/httpService';
import { orderAnswerUp } from '../../utils/orderAnswerUp';

/**
 *
 * @param {string} id - question id
 * @param {number} order - answer order
 * @returns {Redux action}
 */

export const reorderAnswerUp = (id, order) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const answers = orderAnswerUp(questions, id, order);
            // prettier-ignore
            const data = {
                "answers": [...answers]
            };

            await httpService.put(`/api/questions/${id}?debug=true`, data);

            dispatch({
                type: types.REORDER_ANSWER_UP_SUCCESS,
                id,
                payload: answers
            });
        } catch (error) {
            console.log(
                'There was an error while reordering up the answer',
                error
            );
            dispatch({ type: types.REORDER_ANSWER_UP_FAIL });
            setTimeout(
                () => dispatch({ type: types.REORDER_ANSWER_UP_REVERT_ALERT }),
                2000
            );
        }
    };
};
