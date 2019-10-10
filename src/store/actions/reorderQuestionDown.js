import { types } from './types';

export const reorderQuestionDown = id => {
    return async dispatch => {
        try {
            dispatch({
                type: types.REORDER_QUESTION_DOWN_SUCCESS,
                id
            });
        } catch (error) {
            console.log(
                'There was an error while reordering down the question',
                error
            );
        }
    };
};
