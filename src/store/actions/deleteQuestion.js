/* eslint-disable no-param-reassign */
import httpService from '../../services/httpService';
import { types } from './types';

/**
 *
 * @param {string} id
 */

export const deleteQuestion = id => {
    return async (dispatch, getState) => {
        try {
            let questions = [...getState().questions.questions];
            // if questions are less than 10 then remove possible warning & carry on
            if (questions.length <= 10) {
                dispatch({
                    type: types.TEN_QUESTIONS_REACHED,
                    status: false
                });
            }

            const question = questions.find(q => q.id === id);
            const index = questions.indexOf(question);
            questions = questions.filter(q => q.id !== id);
            // reorder remaining questions
            questions.forEach(q => {
                if (q.order > index) q.order -= 1;
                // take into account when deleting one item in a 2items array
                else if (q.order === -1 && questions.length > 0) {
                    // console.log(q.order);
                    q.order = 0;
                }
            });

            await httpService.post('/api/questionnaire', questions);
            dispatch({
                type: types.DELETE_QUESTION_SUCCESS,
                questions
            });
        } catch (error) {
            console.log(
                'There was an error while deleting the question',
                error
            );
            dispatch({ type: types.DELETE_QUESTION_FAIL });
            setTimeout(
                () => dispatch({ type: types.DELETE_QUESTION_REVERT_ALERT }),
                2000
            );
        }
    };
};
