/* eslint-disable no-param-reassign */

/**
 *
 * @param {Array<Question>} questions
 * @param {string} id - question id
 * @param {number} order - answer order
 * @returns {<Answer>} -reoder answers with the selected ordered down
 */

const orderAnswerDown = (questions, id, order) => {
    const question = questions.find(q => q.id === id);
    // find the answer to be changed
    const answer = question.answers.find(a => a.order === order);
    // change the answer to the new order by reducing one
    const newAnswer = { ...answer, order: order + 1 };
    // find the previousAnswer in order to chnage its order as well
    const previousAnswer = question.answers.find(a => a.order === order + 1);

    // take into account the answer with order number 1
    if (previousAnswer) {
        previousAnswer.order = order;

        question.answers = [
            ...question.answers.filter(
                a => a.order !== order && a.order !== order + 1
            ),
            newAnswer,
            previousAnswer
        ];
    } else {
        question.answers.forEach(a => {
            a.order += 1;
        });
        answer.order = 1;

        question.answers = [
            answer,
            ...question.answers.filter(a => a.order !== 1)
        ];
    }

    // sort the array after the changes
    question.answers.sort((a, b) => a.order - b.order);
    return question.answers;
};

export default orderAnswerDown;
