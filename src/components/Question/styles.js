import styled, { css } from 'styled-components';

const italicFont = css`
    font-style: italic;
`;

const AnswerInput = styled.input`
    border: 0px;
    background-color: #f9fafc;

    // remove box outline on focus
    &:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    &::-webkit-input-placeholder {
        ${italicFont}
    }

    &:-moz-placeholder {
        ${italicFont}
    }

    &::-moz-placeholder {
        ${italicFont}
    }

    &:-ms-input-placeholder {
        ${italicFont}
    }
`;

const QuestionText = styled.span`
    color: #2344fa;
    background-color: transparent;
`;

export { QuestionText, AnswerInput };
