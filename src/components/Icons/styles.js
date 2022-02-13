import styled, { css } from 'styled-components';

const icon = css`
    font-size: 1.2em;
    cursor: pointer;
`;

const DownIcon = styled.i`
    margin-right: 1.5rem !important;
    ${icon}
`;

const TrashIcon = styled.i`
    ${icon}
`;

const UpIcon = styled.i`
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
    ${icon}
`;

export { DownIcon, TrashIcon, UpIcon };
