import httpService from '../../services/httpService';
import { types } from './types';

export const getQuestions = () => {
    return async dispatch => {
        try {
            const response = await httpService.get('/api/questions');
            dispatch({
                type: types.GET_QUESTIONS,
                questions: response.data
            });
        } catch (error) {
            console.error(
                'There was an error while fetching the questions',
                error
            );
        }
    };
};
