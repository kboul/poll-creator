import httpService from '../../services/httpService';
import { types } from './types';

/**
 *
 * @param {string} id
 * @param {number} order
 * @returns {Redux action}
 */

export const deleteAnswer = (id, order) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const question = questions.find(q => q.id === id);
            // exlude answer to be deleted from collection
            const remainingAnswers = question.answers.filter(
                a => a.order !== order
            );

            // reorder remaining answers []
            const reorderRemainingAnswers = remainingAnswers.map((a, i) => {
                const answer = { ...a };
                if (answer.order > order) {
                    answer.order = i + 1;
                    return answer;
                }
                return answer;
            });

            const data = {
                "answers": [...reorderRemainingAnswers]
            };

            await httpService.put(`/api/questions/${id}`, data);

            question.answers = [...reorderRemainingAnswers];

            dispatch({
                type: types.DELETE_ANSWER_SUCCESS
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
