/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { types } from './types';
import httpService from '../../services/httpService';

export const reorderQuestionDown = id => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            // find question to be changed
            const question = questions.find(q => q.id === id);
            // store initial order of item to change
            const initialOrder = question.order;
            // find next quetion of the question to be changed
            const nextQuestion = questions.find(
                q => q.order === initialOrder + 1
            );
            if (nextQuestion) {
                // change the order of the next question
                nextQuestion.order -= 1;
                // change the order of the selected question
                question.order += 1;
            } else {
                questions.forEach(q => (q.order += 1));
                question.order = 0;
            }
            // sort the array after the changes
            questions.sort((a, b) => a.order - b.order);

            await httpService.post('/api/questionnaire', questions);
            dispatch({
                type: types.REORDER_QUESTION_DOWN_SUCCESS,
                questions
            });
        } catch (error) {
            console.log(
                'There was an error while reordering down the question',
                error
            );
            dispatch({ type: types.REORDER_QUESTION_DOWN_FAIL, id });
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
