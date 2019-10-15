/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

/**
 *
 * @param {Array<Question>} questions
 * @param {string} id - question to be changed id
 * @returns {<Question>} -reoder questions with the selected ordered down
 */

export const orderQuestionDown = (questions, id) => {
    // find question to be changed
    const question = questions.find(q => q.id === id);
    // store initial order of item to change
    const initialOrder = question.order;
    // find next quetion of the question to be changed
    const nextQuestion = questions.find(q => q.order === initialOrder + 1);
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
    return questions;
};
