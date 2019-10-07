import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import styles from '../sass/Question.module.sass';

const Question = ({ prompt, order, answers }) => {
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

                {answers.map(({ order, body }) => (
                    <div key={order}>
                        <Answer body={body} order={order} />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

Question.propTypes = {
    prompt: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            order: PropTypes.number,
            body: PropTypes.string
        })
    ).isRequired
};

export default Question;
