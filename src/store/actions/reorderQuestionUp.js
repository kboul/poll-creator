import types from './types';
import httpService from '../../services/httpService';
import orderQuestionUp from '../../utils/orderQuestionUp';
import orderQuestionDown from '../../utils/orderQuestionDown';

/**
 *
 * @param {string} id
 * @returns {Redux action}
 */

const reorderQuestionUp = id => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const data = orderQuestionUp(questions, id);

            await httpService.post('/api/questionnaire', data);
            dispatch({
                type: types.REORDER_QUESTION_UP_SUCCESS,
                payload: data
            });
        } catch (error) {
            console.log(
                'There was an error while reordering up the question',
                error
            );
            const questions = [...getState().questions.questions];
            const data = orderQuestionDown(questions, id);
            dispatch({ type: types.REORDER_QUESTION_UP_FAIL, payload: data });
            setTimeout(
                () =>
                    dispatch({ type: types.REORDER_QUESTION_UP_REVERT_ALERT }),
                2000
            );
        }
    };
};

export default reorderQuestionUp;
