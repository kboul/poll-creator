/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import httpService from '../../services/httpService';
import { types } from './types';

/**
 *
 * @param {string} id
 * @param {string} order
 */

export const deleteAnswer = (id, order) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const question = questions.find(q => q.id === id);
            // exlude current answer
            const remainingAnswers = question.answers.filter(
                a => a.order !== order
            );

            console.log(remainingAnswers);
            const orderRemainingAnswers = [...remainingAnswers];
            remainingAnswers.forEach((a, index) => {
                a.order = index + 1;
            });

            const data = {
                answers: orderRemainingAnswers
            };

            await httpService.put(`/api/questions/${id}`, data);

            dispatch({
                type: types.DELETE_ANSWER_SUCCESS,
                id,
                order,
                orderRemainingAnswers
            });
        } catch (error) {
            console.log('There was an error while deleting the answer', error);
            dispatch({ type: types.DELETE_ANSWER_FAIL });
            setTimeout(
                () => dispatch({ type: types.DELETE_ANSWER_REVERT_ALERT }),
                2000
            );
        }
    };
};
