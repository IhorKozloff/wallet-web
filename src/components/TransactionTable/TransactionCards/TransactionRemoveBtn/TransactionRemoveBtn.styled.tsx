import styled from 'styled-components';

export const TransactioCardRemoveBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: var(--light-gray);
    transition: color 500ms ease;
    

    &:hover {
        color: red;
        opacity: 0.7;
    }
    &:active {
        transform: scale(0.9);
    }
    & svg {
        width: 25px;
        height: 30px;
    }
`;