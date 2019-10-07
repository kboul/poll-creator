import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icons from './Icons';
import { deleteAnswer } from '../store/actions/deleteAnswer';
import styles from '../sass/Answer.module.sass';

const Answer = ({ id, body, order, deleteAnswer }) => {
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
                        value={body}
                        onChange={e => console.log(e)}
                    />
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
    deleteAnswer: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    deleteAnswer
};

export default connect(
    null,
    mapDispatchToProps
)(Answer);
