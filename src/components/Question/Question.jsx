import { useState } from 'react';
import { connect } from 'react-redux';

import { AnswerInput, QuestionText } from './styles';
import Answer from '../Answer';
import Icons from '../Icons';
import SaveButton from '../SaveButton';
import updateQuestion from '../../store/actions/updateQuestion';
import reorderQuestionUp from '../../store/actions/reorderQuestionUp';
import reorderQuestionDown from '../../store/actions/reorderQuestionDown';
import createAnswer from '../../store/actions/createAnswer';
import deleteQuestion from '../../store/actions/deleteQuestion';
import uuidGenerator from '../../utils/uuidGenerator';
import propTypes from '../../propTypes/question';

function Question({
    prompt,
    id,
    order,
    answers,
    updateQuestion,
    reorderQuestionUp,
    reorderQuestionDown,
    createAnswer,
    deleteQuestion
}) {
    const [value, setValue] = useState(prompt);
    const [toggleSave, setToggleSave] = useState(false);

    const handleCreateAnswer = (id, e) => {
        const {
            target: { value }
        } = e;
        if (e.key === 'Enter' && value.length > 0) {
            createAnswer(id, value);
            e.target.value = '';
        }
    };

    const handleInputChange = e => {
        setValue(e.target.value);
        setToggleSave(true);
    };

    const handleSaveBtnClick = () => {
        updateQuestion(value, id);
        setToggleSave(false);
    };

    return (
        <div className="card my-4" key={id}>
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <QuestionText className="input-group-text">
                                    {`Q${order + 1}`}
                                </QuestionText>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                value={value}
                                onChange={handleInputChange}
                            />
                            {toggleSave && (
                                <SaveButton onClick={handleSaveBtnClick} />
                            )}
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 my-auto">
                        <Icons
                            onAngleUpClick={() => reorderQuestionUp(id)}
                            onAngleDownClick={() => reorderQuestionDown(id)}
                            onTrashClick={() => deleteQuestion(id)}
                        />
                    </div>
                </div>

                <hr />

                {answers.map(({ order, body }) => (
                    <div key={uuidGenerator()}>
                        <Answer id={id} body={body} order={order} />
                        <hr />
                    </div>
                ))}
                <AnswerInput
                    type="text"
                    placeholder="this is not an answer yet"
                    className="form-control"
                    onKeyDown={e => handleCreateAnswer(id, e)}
                />
            </div>
        </div>
    );
}

Question.propTypes = propTypes;

const mapDispatchToProps = {
    updateQuestion,
    reorderQuestionUp,
    reorderQuestionDown,
    createAnswer,
    deleteQuestion
};

export default connect(null, mapDispatchToProps)(Question);
