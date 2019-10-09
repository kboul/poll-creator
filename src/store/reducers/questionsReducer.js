/* eslint-disable no-return-assign */
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
            // const remainingAnswers = question.answers.filter(
            //     a => a.order !== action.order
            // );
            question.answers = [...action.orderRemainingAnswers];
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
        case types.REORDER_QUESTION_UP: {
            const questions = [...state.questions];
            // find question to be changed
            const question = questions.find(q => q.id === action.id);
            // store initial order of item to change
            const initialOrder = question.order;
            // find previous quetion of the question to be changed
            const nextQuestion = questions.find(
                q => q.order === initialOrder - 1
            );
            if (nextQuestion) {
                // change the order of the previous question
                nextQuestion.order += 1;
                // change the order of the selected question
                question.order -= 1;
            } else {
                questions.forEach(q => (q.order -= 1));
                question.order = questions.length - 1;
            }
            // sort the array after the changes
            questions.sort((a, b) => a.order - b.order);
            return {
                ...state,
                questions
            };
        }
        case types.REORDER_QUESTION_DOWN: {
            const questions = [...state.questions];
            // find question to be changed
            const question = questions.find(q => q.id === action.id);
            // store initial order of item to change
            const initialOrder = question.order;
            // find next quetion of the question to be changed
            const nextQuestion = questions.find(
                q => q.order === initialOrder + 1
            );
            if (nextQuestion) {
                // change the order of the next question
                nextQuestion.order -= 1;
                // change the order of the selected question
                question.order += 1;
            } else {
                questions.forEach(q => (q.order += 1));
                question.order = 0;
            }
            // sort the array after the changes
            questions.sort((a, b) => a.order - b.order);
            return {
                ...state,
                questions
            };
        }
        default:
            return state;
    }
};

export default questionsReducer;
