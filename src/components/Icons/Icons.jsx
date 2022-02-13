import PropTypes from 'prop-types';

import { DownIcon, TrashIcon, UpIcon } from './styles';

export default function Icons({
    onAngleUpClick,
    onAngleDownClick,
    onTrashClick
}) {
    return (
        <div className="float-right">
            <UpIcon
                aria-label="onAngleUpClick"
                className="fa fa-angle-up"
                onClick={onAngleUpClick}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
            />
            <DownIcon
                aria-label="onAngleDownClick"
                className="fa fa-angle-down"
                onClick={onAngleDownClick}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
            />
            <TrashIcon
                aria-label="onTrashClick"
                className="fa fa-trash"
                onClick={onTrashClick}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
            />
        </div>
    );
}

Icons.propTypes = {
    onAngleUpClick: PropTypes.func.isRequired,
    onAngleDownClick: PropTypes.func.isRequired,
    onTrashClick: PropTypes.func.isRequired
};
