import { types } from '../actions/types';

const questionsReducer = (state = [], action) => {
    switch (action.type) {
        case types.GET_QUESTIONS:
            const questions = action.questions;
            return {
                ...state,
                questions
            };
        default:
            return state;
    }
};

export default questionsReducer;
