import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sass/Answer.module.sass';

const Answer = ({ body, order }) => {
    return (
        <div className={`input-group ${styles.inputGroup}`}>
            <div className="input-group-prepend">
                <span className={`input-group-text ${styles.inputGroupText}`}>
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
    );
};

Answer.propTypes = {
    body: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired
};

export default Answer;
