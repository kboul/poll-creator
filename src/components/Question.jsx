import { useState } from 'react';
import { connect } from 'react-redux';

import Answer from './Answer';
import Icons from './Icons';
import SaveButton from './SaveButton';
import updateQuestion from '../store/actions/updateQuestion';
import reorderQuestionUp from '../store/actions/reorderQuestionUp';
import reorderQuestionDown from '../store/actions/reorderQuestionDown';
import createAnswer from '../store/actions/createAnswer';
import deleteQuestion from '../store/actions/deleteQuestion';
import uuidGenerator from '../utils/uuidGenerator';
import propTypes from '../propTypes/question';
import styles from '../sass/Question.module.sass';

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

    return (
        <div className="card my-4" key={id}>
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span
                                    className={`input-group-text ${styles.order}`}>
                                    {`Q${order + 1}`}
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                value={value}
                                onChange={e => {
                                    setValue(e.target.value);
                                    setToggleSave(true);
                                }}
                            />
                            {toggleSave && (
                                <SaveButton
                                    onClick={() => {
                                        updateQuestion(value, id);
                                        setToggleSave(false);
                                    }}
                                />
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
                <input
                    type="text"
                    placeholder="this is not an answer yet"
                    className={`form-control ${styles.input}`}
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
