import styled from 'styled-components';

export const PasswordTooltipWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        cursor: pointer;
        color: #FBDD73;
        transition: color 500ms ease;
    }

    &:hover {
        & .tooltip-text {
            opacity: 0.5;
        }

        & svg {
            color: #FFD12E;
        }
    }
`;

export const TooltipText = styled.div`
    width: 220px;
    height: 20px;
    border: 1px solid black;
    background-color: #FBDD73;
    position: absolute;
    top: -32px;
    right: 3px;
    border-radius: 2px;
    opacity: 0;
    padding: 5px;
    font-size: 8px;
    font-weight: var(--bold);
    pointer-events: none;
    transition: opacity 500ms ease;
`;