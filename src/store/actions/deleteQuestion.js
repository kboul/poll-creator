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
            const questions = [...getState().questions.questions];
            const question = questions.find(q => q.id === id);
            const index = questions.indexOf(question);
            questions.splice(index, 1);
            // reorder remaining questions
            questions.forEach(q => {
                if (q.order >= index) q.order -= 1;
                // take into account when deleting one item in a 2items array
                else if (q.order === -1 && questions.length > 1) {
                    console.log(q.order);
                    q.order = 0;
                }
            });

            await httpService.post('/api/questionnaire', questions);
            dispatch({
                type: types.DELETE_QUESTION,
                id
            });
        } catch (error) {
            console.log(
                'There was an error while deleting the question',
                error
            );
        }
    };
};
