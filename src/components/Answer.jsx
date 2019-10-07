import React from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';
import styles from '../sass/Answer.module.sass';

const Answer = ({ body, order }) => {
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
                <Icons />
            </div>
        </div>
    );
};

Answer.propTypes = {
    body: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired
};

export default Answer;
