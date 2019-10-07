import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icons from './Icons';
import SaveButton from './SaveButton';
import { updateAnswer } from '../store/actions/updateAnswer';
import { deleteAnswer } from '../store/actions/deleteAnswer';
import styles from '../sass/Answer.module.sass';

const Answer = ({ id, body, order, updateAnswer, deleteAnswer }) => {
    const [value, setValue] = useState(body);
    const [toggleSave, setToggleSave] = useState(false);

    return (
        <div className="row no-gutters">
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10 my-auto">
                <div className={`input-group ${styles.inputGroup}`}>
                    <div className="input-group-prepend">
                        <span
                            className={`input-group-text ${styles.inputGroupText}`}>
                            {order}
                        </span>
                    </div>
                    <input
                        type="text"
                        className={`form-control ${styles.input}`}
                        value={value}
                        onChange={e => {
                            setValue(e.target.value);
                            setToggleSave(true);
                        }}
                    />
                    {toggleSave && (
                        <SaveButton
                            onClick={() => {
                                updateAnswer(value, id, order);
                                setToggleSave(false);
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 my-auto">
                <Icons onTrashClick={() => deleteAnswer(id, order)} />
            </div>
        </div>
    );
};

Answer.propTypes = {
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    updateAnswer: PropTypes.func.isRequired,
    deleteAnswer: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    updateAnswer,
    deleteAnswer
};

export default connect(
    null,
    mapDispatchToProps
)(Answer);
