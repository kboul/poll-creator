/* eslint-disable array-callback-return */
/* eslint-disable operator-assignment */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { types } from './types';
// import httpService from '../../services/httpService';

/**
 *
 * @param {string} id - question id
 * @param {string} order - answer order
 */

export const reorderAnswerUp = (id, order) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const question = questions.find(q => q.id === id);

            dispatch({
                type: types.REORDER_ANSWER_UP_SUCCESS
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
