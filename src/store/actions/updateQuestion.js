import httpService from '../../services/httpService';
import { types } from './types';

export const updateQuestion = (prompt, id) => {
    return async dispatch => {
        try {
            const data = {
                "prompt": prompt
            };

            await httpService.put(`/api/questions/${id}`, data);
            dispatch({
                type: types.UPDATE_QUESTION_SUCCESS,
                prompt,
                id
            });
        } catch (error) {
            console.log(
                'There was an error while updating the question',
                error
            );
        }
    };
};