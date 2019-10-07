import { types } from './types';

export const deleteQuestion = id => {
    return async dispatch => {
        try {
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
