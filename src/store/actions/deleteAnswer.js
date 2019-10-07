import { types } from './types';

/**
 *
 * @param {string} id
 * @param {string} order
 */

export const deleteAnswer = (id, order) => {
    return async dispatch => {
        try {
            dispatch({
                type: types.DELETE_ANSWER,
                id,
                order
            });
        } catch (error) {
            console.log('There was an error while deleting the answer', error);
        }
    };
};
