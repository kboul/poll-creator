import PropTypes from 'prop-types';

import styles from '../sass/Icons.module.sass';

export default function Icons({
    onAngleUpClick,
    onAngleDownClick,
    onTrashClick
}) {
    return (
        <div className="float-right">
            <i
                className={`fa fa-angle-up ${styles.faUp} ${styles.fa}`}
                onClick={onAngleUpClick}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
                aria-label="onAngleUpClick"
            />
            <i
                className={`fa fa-angle-down ${styles.faDown} ${styles.fa}`}
                onClick={onAngleDownClick}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
                aria-label="onAngleDownClick"
            />
            <i
                className={`fa fa-trash ${styles.fa}`}
                onClick={onTrashClick}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
                aria-label="onTrashClick"
            />
        </div>
    );
}

Icons.propTypes = {
    onAngleUpClick: PropTypes.func.isRequired,
    onAngleDownClick: PropTypes.func.isRequired,
    onTrashClick: PropTypes.func.isRequired
};
