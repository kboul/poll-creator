import React from 'react';
import PropTypes from 'prop-types';

const buttonBorder = { borderLeft: '1px solid #6c757d' };

const SaveButton = ({ onClick }) => {
    return (
        <div className="input-group-append" style={buttonBorder}>
            <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={onClick}>
                Save
            </button>
        </div>
    );
};

SaveButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default SaveButton;
