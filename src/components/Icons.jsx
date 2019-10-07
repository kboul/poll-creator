import React from 'react';
import styles from '../sass/Icons.module.sass';

const Icons = () => {
    return (
        <div className="float-right">
            <i className={`fa fa-angle-up ${styles.faUp} ${styles.fa}`} />
            <i className={`fa fa-angle-down ${styles.faDown} ${styles.fa}`} />
            <i className={`fa fa-trash ${styles.fa}`} />
        </div>
    );
};

export default Icons;
