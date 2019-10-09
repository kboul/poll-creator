import { types } from './types';

export const reorderQuestionUp = id => {
    return async dispatch => {
        try {
            dispatch({
                type: types.REORDER_QUESTION_UP,
                id
            });
        } catch (error) {
            console.log(
                'There was an error while reordering up the question',
                error
            );
        }
    };
};
