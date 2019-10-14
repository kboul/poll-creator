import httpService from '../../services/httpService';
import { types } from './types';

export const updateAnswer = (body, id, order) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const question = questions.find(q => q.id === id);
            const answer = question.answers.filter(a => a.order === order);
            answer[0].body = body;

            const data = {
                "answers": [...question.answers]
            }

            await httpService.put(`/api/questions/${id}?debug=true`, data);
            dispatch({
                type: types.UPDATE_ANSWER_SUCCESS,
                body,
                id,
                order
            });
        } catch (error) {
            console.log('There was an error while updating the answer', error);
            dispatch({ type: types.UPDATE_ANSWER_FAIL });
            setTimeout(
                () =>
                    dispatch({ type: types.UPDATE_ANSWER_REVERT_ALERT }),
                2000
            );
        }
    };
};
