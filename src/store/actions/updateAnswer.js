import httpService from '../../services/httpService';
import { types } from './types';

export const updateAnswer = (body, id, order) => {
    return async (dispatch, getState) => {
        const questions = [...getState().questions.questions];
        const question = questions.find(q => q.id === id);
        const answer = question.answers.filter(a => a.order === order);
        answer[0].body = body;

        const data = {
            "answers": [
                ...question.answers
            ]
        }

        try {
            await httpService.put(`/api/questions/${id}`, data);
            dispatch({
                type: types.UPDATE_ANSWER,
                body,
                id,
                order
            });
        } catch (error) {
            console.log('There was an error while updating the answer', error);
        }
    };
};
