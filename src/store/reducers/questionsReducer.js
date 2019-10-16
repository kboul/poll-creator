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
    reorderAnswerUpError: false,
    reorderAnswerDownError: false,
    updateQuestionError: false,
    updateAnswerError: false,
    deleteQuestionError: false,
    deleteAnswerError: false
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_QUESTIONS_SUCCESS: {
            const questions = [...action.payload];
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
            const questions = [...action.payload];
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
        case types.CREATE_ANSWER_SUCCESS: {
            return {
                ...state,
                createAnswerError: false
            };
        }
        case types.CREATE_ANSWER_FAIL: {
            return {
                ...state,
                createAnswerError: true
            };
        }
        case types.CREATE_ANSWER_REVERT_ALERT:
            return {
                ...state,
                createAnswerError: false
            };
        case types.TEN_QUESTIONS_REACHED:
            return {
                ...state,
                tenQuestionsReached: action.status
            };
        case types.REORDER_QUESTION_UP_SUCCESS: {
            const questions = [...action.payload];
            return {
                ...state,
                questions,
                reorderQuestionUpError: false
            };
        }
        case types.REORDER_QUESTION_UP_FAIL: {
            const questions = [...action.payload];
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
            const questions = [...action.payload];
            return {
                ...state,
                questions,
                reorderQuestionDownError: false
            };
        }
        case types.REORDER_QUESTION_DOWN_FAIL: {
            const questions = [...action.payload];
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
        case types.REORDER_ANSWER_UP_SUCCESS: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            question.answers = [...action.payload];
            return {
                ...state,
                questions,
                reorderAnswerUpError: false
            };
        }
        case types.REORDER_ANSWER_UP_FAIL: {
            return {
                ...state,
                reorderAnswerUpError: true
            };
        }
        case types.REORDER_ANSWER_UP_REVERT_ALERT:
            return {
                ...state,
                reorderAnswerUpError: false
            };
        case types.REORDER_ANSWER_DOWN_SUCCESS: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            question.answers = [...action.payload];
            return {
                ...state,
                questions,
                reorderAnswerDownError: false
            };
        }
        case types.REORDER_ANSWER_DOWN_FAIL: {
            return {
                ...state,
                reorderAnswerDownError: true
            };
        }
        case types.REORDER_ANSWER_DOWN_REVERT_ALERT:
            return {
                ...state,
                reorderAnswerDownError: false
            };
        case types.UPDATE_QUESTION_SUCCESS: {
            const questions = [...state.questions];
            const question = questions.find(q => q.id === action.id);
            question.prompt = action.prompt;
            return {
                ...state,
                questions,
                updateQuestionError: false
            };
        }
        case types.UPDATE_QUESTION_FAIL:
            return {
                ...state,
                updateQuestionError: true
            };
        case types.UPDATE_QUESTION_REVERT_ALERT:
            return {
                ...state,
                updateQuestionError: false
            };
        case types.UPDATE_ANSWER_SUCCESS: {
            return {
                ...state,
                updateAnswerError: false
            };
        }
        case types.UPDATE_ANSWER_FAIL:
            return {
                ...state,
                updateAnswerError: true
            };
        case types.UPDATE_ANSWER_REVERT_ALERT:
            return {
                ...state,
                updateAnswerError: false
            };
        case types.DELETE_QUESTION_SUCCESS: {
            const questions = [...action.payload];
            return {
                ...state,
                questions,
                deleteQuestionError: false
            };
        }
        case types.DELETE_QUESTION_FAIL:
            const questions = [...state.questions];
            questions.forEach((q, index) => {
                // eslint-disable-next-line no-param-reassign
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
        default:
            return state;
    }
};

export default questionsReducer;
