import httpService from '../../services/httpService';
import { types } from './types';

/**
 * @returns {Redux action}
 */

export const getQuestions = () => {
    return async dispatch => {
        try {
            dispatch({ type: types.GET_QUESTIONS_LOADING });
            const {
                data: { data: payload }
            } = await httpService.get('/api/questions');
            dispatch({
                type: types.GET_QUESTIONS_SUCCESS,
                payload
            });
        } catch (error) {
            console.log(
                'There was an error while fetching the questions',
                error
            );
            dispatch({ type: types.GET_QUESTIONS_FAIL });
        }
    };
};
