import { types } from './types';
import httpService from '../../services/httpService';

/**
 *
 * @param {string} id
 * @param {string} body
 */

export const createAnswer = (id, body) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const question = questions.find(q => q.id === id);
            console.log(question);
            const previousAnswers = question.answers;
            const answers = [
                ...previousAnswers,
                { order: previousAnswers.length + 1, body }
            ];
            question.answers = answers;

            await httpService.post('/api/questionnaire', questions);
            dispatch({
                type: types.CREATE_ANSWER_SUCCESS
            });
        } catch (error) {
            console.log('There was an error while creating the answer', error);
            dispatch({ type: types.CREATE_ANSWER_FAIL, id });
            setTimeout(
                () => dispatch({ type: types.CREATE_ANSWER_REVERT_ALERT }),
                2000
            );
        }
    };
};