import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sass/Icons.module.sass';

const Icons = ({ onAngleUpClick, onAngleDownClick, onTrashClick }) => {
    return (
        <div className="float-right">
            <i
                className={`fa fa-angle-up ${styles.faUp} ${styles.fa}`}
                onClick={onAngleUpClick}
            />
            <i
                className={`fa fa-angle-down ${styles.faDown} ${styles.fa}`}
                onClick={onAngleDownClick}
            />
            <i className={`fa fa-trash ${styles.fa}`} onClick={onTrashClick} />
        </div>
    );
};

Icons.propTypes = {
    onAngleUpClick: PropTypes.func.isRequired,
    onAngleDownClick: PropTypes.func.isRequired,
    onTrashClick: PropTypes.func.isRequired
};

export default Icons;
