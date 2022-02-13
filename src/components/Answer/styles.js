import styled from 'styled-components';

const Input = styled.input`
    border: 0px;

    // remove box outline on focus
    &:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
`;

const InputGroup = styled.div`
    margin-top: -15px;
    margin-bottom: -15px;
`;

const InputGroupText = styled.span`
    background-color: transparent;
    border: 0px;
`;

export { Input, InputGroup, InputGroupText };
