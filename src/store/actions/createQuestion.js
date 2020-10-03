import types from './types';
import uuidGenerator from '../../utils/uuidGenerator';
import httpService from '../../services/httpService';

/**
 *  @returns {Redux action}
 */

const createQuestion = () => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            // if questions reached 9 then flag warning
            if (questions.length === 9) {
                console.log('10 reached');
                dispatch({
                    type: types.TEN_QUESTIONS_REACHED,
                    status: true
                });
            }

            // prettier-ignore
            const newQuestion = {
                "id": uuidGenerator(),
                "prompt": "",
                "order": questions.length,
                "answers": []
            }

            const data = [...questions, newQuestion];

            await httpService.post('/api/questionnaire', data);
            dispatch({
                type: types.CREATE_QUESTION_SUCCESS,
                payload: data
            });
        } catch (error) {
            console.log(
                'There was an error while creating the question',
                error
            );
            dispatch({ type: types.CREATE_QUESTION_FAIL });
            dispatch({
                type: types.TEN_QUESTIONS_REACHED,
                status: false
            });
            setTimeout(
                () => dispatch({ type: types.CREATE_QUESTION_REVERT_ALERT }),
                2000
            );
        }
    };
};

export default createQuestion;
