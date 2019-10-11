/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { types } from '../actions/types';

const initialState = {
    questions: [],
    loading: false,
    getQuestionsError: false,
    createQuestionError: false,
    createAnswerError: false,
    tenQuestionsReached: false,
    reorderQuestionUpError: false,
    reorderQuestionDownError: false,
    updateQuestionError: false,
    updateAnswerError: false,
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
        case types.CREATE_QUESTION_SUCCESS: {
            const questions = action.newQuestions;
            return {
                ...state,
                questions,
                createQuestionError: false
            };
        }
        case types.CREATE_QUESTION_FAIL:
            return {
                ...state,
                createQuestionError: true
            };
        case types.CREATE_QUESTION_REVERT_ALERT:
            return {
                ...state,
                createQuestionError: false
            };
        case types.TEN_QUESTIONS_REACHED:
            return {
                ...state,
                tenQuestionsReached: action.status
            };
        case types.CREATE_ANSWER_SUCCESS: {
            return {
                ...state,
                createAnswerError: false
            };
        }
        case types.CREATE_ANSWER_FAIL: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            const answers = [...question.answers];
            question.answers = answers.splice(0, answers.length - 1);
            return {
                ...state,
                questions,
                createAnswerError: true
            };
        }
        case types.CREATE_ANSWER_REVERT_ALERT:
            return {
                ...state,
                createAnswerError: false
            };
        case types.UPDATE_QUESTION_SUCCESS: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            question.prompt = action.prompt;
            return {
                ...state,
                questions
            };
        }
        case types.UPDATE_QUESTION_FAIL:
            // todo revert state
            return {
                ...state,
                updateQuestionError: true
            };
        case types.UPDATE_QUESTION_REVERT_ALERT:
            return {
                ...state,
                updateQuestionError: false
            };
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
        case types.UPDATE_ANSWER_SUCCESS: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            const answer = question.answers.filter(
                a => a.order === action.order
            );
            answer[0].body = action.body;
            return {
                ...state,
                questions,
                updateAnswerError: false
            };
        }
        case types.UPDATE_ANSWER_FAIL:
            // todo revert state
            return {
                ...state,
                updateAnswerError: true
            };
        case types.UPDATE_ANSWER_REVERT_ALERT:
            return {
                ...state,
                updateAnswerError: false
            };
        case types.DELETE_ANSWER_SUCCESS: {
            return {
                ...state,
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
        case types.REORDER_QUESTION_UP_SUCCESS: {
            const questions = [...action.data];
            return {
                ...state,
                questions,
                reorderQuestionUpError: false
            };
        }
        case types.REORDER_QUESTION_UP_FAIL: {
            const questions = [...action.data];
            return {
                ...state,
                questions,
                reorderQuestionUpError: true
            };
        }
        case types.REORDER_QUESTION_UP_REVERT_ALERT:
            return {
                ...state,
                reorderQuestionUpError: false
            };
        case types.REORDER_QUESTION_DOWN_SUCCESS: {
            const questions = [...action.data];
            return {
                ...state,
                questions
            };
        }
        case types.REORDER_QUESTION_DOWN_FAIL: {
            const questions = [...action.data];
            return {
                ...state,
                questions,
                reorderQuestionDownError: true
            };
        }
        case types.REORDER_QUESTION_DOWN_REVERT_ALERT:
            return {
                ...state,
                reorderQuestionDownError: false
            };
        default:
            return state;
    }
};

export default questionsReducer;
