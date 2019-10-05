import { types } from '../actions/types';

const initialState = {
    questions: []
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_QUESTIONS:
            const questions = [...action.questions];
            return {
                ...state,
                questions
            };
        default:
            return state;
    }
};

export default questionsReducer;
