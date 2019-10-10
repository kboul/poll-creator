/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { types } from './types';
import httpService from '../../services/httpService';
import { orderQuestionDown } from '../../utils/orderQuestionDown';
import { orderQuestionUp } from '../../utils/orderQuestionUp';

export const reorderQuestionDown = id => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const data = orderQuestionDown(questions, id);

            await httpService.post('/api/questionnaire', data);
            dispatch({
                type: types.REORDER_QUESTION_DOWN_SUCCESS,
                data
            });
        } catch (error) {
            console.log(
                'There was an error while reordering down the question',
                error
            );
            const questions = [...getState().questions.questions];
            const data = orderQuestionUp(questions, id);
            dispatch({ type: types.REORDER_QUESTION_DOWN_FAIL, data });
            setTimeout(
                () =>
                    dispatch({
                        type: types.REORDER_QUESTION_DOWN_REVERT_ALERT
                    }),
                2000
            );
        }
    };
};
