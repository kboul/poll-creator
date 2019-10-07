import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sass/Question.module.sass';

const QuestionTemplate = ({ prompt, order }) => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-xl-11 col-lg-10 col-md-9 col-sm-10">
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
                                value={prompt}
                                onChange={e => console.log(e)}
                            />
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-20 col-md-3 col-sm-2 my-auto">
                        <i
                            className={`fa fa-angle-up ${styles.faUp} ${styles.fa}`}
                        />
                        <i className={`fa fa-angle-down ${styles.fa}`} />
                        <i className={`fa fa-trash float-right ${styles.fa}`} />
                    </div>
                </div>

                <hr />
            </div>
        </div>
    );
};

QuestionTemplate.propTypes = {
    prompt: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired
};

export default QuestionTemplate;
