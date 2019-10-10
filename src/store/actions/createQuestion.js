import { types } from './types';
import { idGenerator } from '../../utils/idGenerator';
import httpService from '../../services/httpService';

export const createQuestion = () => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            // if questions reached 10 then flag warning & return
            if (questions.length > 9) {
                console.log('10 reached');
                dispatch({
                    type: types.TEN_QUESTIONS_REACHED,
                    status: true
                });
                return;
            }

            const newQuestion = {
                "id": idGenerator(),
                "prompt": "",
                "order": questions.length,
                "answers": [
                    {
                        "order": 1,
                        "body": "Yes"
                    },
                    {
                        "order": 2,
                        "body": "No"
                    }
                ]
            }
            const newQuestions = [...questions, newQuestion]

            await httpService.post('/api/questionnaire', newQuestions);
            dispatch({
                type: types.CREATE_QUESTION_SUCCESS, newQuestions
            });
        } catch (error) {
            console.log(
                'There was an error while creating the question',
                error
            );
            dispatch({ type: types.CREATE_QUESTION_FAIL });
            setTimeout(
                () => dispatch({ type: types.CREATE_QUESTION_REVERT_ALERT }),
                2000
            );
        }
    };
};
