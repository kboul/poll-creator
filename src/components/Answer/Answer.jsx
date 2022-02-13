import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Input, InputGroup, InputGroupText } from './styles';
import Icons from '../Icons';
import SaveButton from '../SaveButton';
import updateAnswer from '../../store/actions/updateAnswer';
import deleteAnswer from '../../store/actions/deleteAnswer';
import reorderAnswerUp from '../../store/actions/reorderAnswerUp';
import reorderAnswerDown from '../../store/actions/reorderAnswerDown';

function Answer({
    id,
    body,
    order,
    updateAnswer,
    deleteAnswer,
    reorderAnswerUp,
    reorderAnswerDown
}) {
    const [value, setValue] = useState(body);
    const [toggleSave, setToggleSave] = useState(false);

    const handleInputChange = e => {
        setValue(e.target.value);
        setToggleSave(true);
    };

    const handleSaveBtnClick = () => {
        updateAnswer(value, id, order);
        setToggleSave(false);
    };

    return (
        <div className="row no-gutters">
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10 my-auto">
                <InputGroup className="input-group">
                    <div className="input-group-prepend">
                        <InputGroupText className="input-group-text">
                            {order}
                        </InputGroupText>
                    </div>
                    <Input
                        type="text"
                        className="form-control"
                        value={value}
                        onChange={handleInputChange}
                    />
                    {toggleSave && <SaveButton onClick={handleSaveBtnClick} />}
                </InputGroup>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 my-auto">
                <Icons
                    onAngleUpClick={() => reorderAnswerUp(id, order)}
                    onAngleDownClick={() => reorderAnswerDown(id, order)}
                    onTrashClick={() => deleteAnswer(id, order)}
                />
            </div>
        </div>
    );
}

Answer.propTypes = {
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    updateAnswer: PropTypes.func.isRequired,
    deleteAnswer: PropTypes.func.isRequired,
    reorderAnswerUp: PropTypes.func.isRequired,
    reorderAnswerDown: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    updateAnswer,
    deleteAnswer,
    reorderAnswerUp,
    reorderAnswerDown
};

export default connect(null, mapDispatchToProps)(Answer);
