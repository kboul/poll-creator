import httpService from '../../services/httpService';
import { types } from './types';

export const getQuestions = () => {
    return async dispatch => {
        try {
            dispatch({ type: types.GET_QUESTIONS_LOADING });
            const response = await httpService.get('/api/questions');
            dispatch({
                type: types.GET_QUESTIONS_SUCCESS,
                questions: response.data.data
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
