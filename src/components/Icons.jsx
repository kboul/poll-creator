import React from 'react';
import styles from '../sass/Icons.module.sass';

const Icons = () => {
    return (
        <>
            <i className={`fa fa-angle-up ${styles.faUp} ${styles.fa}`} />
            <i className={`fa fa-angle-down ${styles.fa}`} />
            <i className={`fa fa-trash float-right ${styles.fa}`} />
        </>
    );
};

export default Icons;
