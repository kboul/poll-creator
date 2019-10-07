import { types } from '../actions/types';

const initialState = {
    questions: [],
    loading: false,
    error: false
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_QUESTIONS:
            const questions = [...action.questions];
            return {
                ...state,
                questions,
                loading: false,
                error: false
            };
        case types.GET_QUESTIONS_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            };
        case types.GET_QUESTIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default questionsReducer;
