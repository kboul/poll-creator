import httpService from '../../services/httpService';
import { types } from './types';

export const updateQuestion = (prompt, id) => {
    return async dispatch => {
        const data = {
            "prompt": prompt
        };

        try {
            await httpService.put(`/api/questions/${id}`, data);
            dispatch({
                type: types.UPDATE_QUESTION,
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