import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Answer from './Answer';
import Icons from './Icons';
import SaveButton from './SaveButton';
import { updateQuestion } from '../store/actions/updateQuestion';
import { deleteQuestion } from '../store/actions/deleteQuestion';
import styles from '../sass/Question.module.sass';

const Question = ({
    prompt,
    id,
    order,
    answers,
    updateQuestion,
    deleteQuestion
}) => {
    const [value, setValue] = useState(prompt);
    const [toggleSave, setToggleSave] = useState(false);

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
                    <div className="col-xl-2 col-lg-20 col-md-3 col-sm-2 my-auto">
                        <Icons onTrashClick={() => deleteQuestion(id)} />
                    </div>
                </div>

                <hr />

                {answers.map(({ order, body }) => (
                    <div key={order}>
                        <Answer id={id} body={body} order={order} />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

Question.propTypes = {
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            order: PropTypes.number,
            body: PropTypes.string
        })
    ).isRequired,
    id: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    prompt: PropTypes.string.isRequired,
    updateQuestion: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    updateQuestion,
    deleteQuestion
};

export default connect(
    null,
    mapDispatchToProps
)(Question);
