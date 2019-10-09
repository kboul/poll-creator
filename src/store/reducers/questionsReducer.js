/* eslint-disable no-param-reassign */
import { types } from '../actions/types';

const initialState = {
    questions: [],
    loading: false,
    getQuestionsError: false,
    deleteQuestionError: false,
    deleteAnswerError: false
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_QUESTIONS_SUCCESS: {
            const questions = [...action.questions];
            return {
                ...state,
                questions,
                loading: false,
                getQuestionsError: false
            };
        }
        case types.GET_QUESTIONS_LOADING:
            return {
                ...state,
                loading: true,
                getQuestionsError: false
            };
        case types.GET_QUESTIONS_FAIL:
            return {
                ...state,
                loading: false,
                getQuestionsError: true
            };
        case types.UPDATE_QUESTION: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            question.prompt = action.prompt;
            return {
                ...state,
                questions
            };
        }
        case types.DELETE_QUESTION_SUCCESS: {
            const questions = [...action.questions];
            return {
                ...state,
                questions,
                deleteQuestionError: false
            };
        }
        case types.DELETE_QUESTION_FAIL:
            const questions = [...state.questions];
            // eslint-disable-next-line func-names
            questions.forEach(function(q, index) {
                q.order = index;
            });
            return {
                ...state,
                questions,
                deleteQuestionError: true
            };
        case types.DELETE_QUESTION_REVERT_ALERT:
            return {
                ...state,
                deleteQuestionError: false
            };
        case types.UPDATE_ANSWER: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            const answer = question.answers.filter(
                a => a.order === action.order
            );
            answer[0].body = action.body;
            return {
                ...state,
                questions
            };
        }
        case types.DELETE_ANSWER_SUCCESS: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            // exlude current answer
            const remainingAnswers = question.answers.filter(
                a => a.order !== action.order
            );
            question.answers = [...remainingAnswers];
            return {
                ...state,
                questions,
                deleteAnswerError: false
            };
        }
        case types.DELETE_ANSWER_FAIL:
            return {
                ...state,
                deleteAnswerError: true
            };
        case types.DELETE_ANSWER_REVERT_ALERT:
            return {
                ...state,
                deleteAnswerError: false
            };
        default:
            return state;
    }
};

export default questionsReducer;
