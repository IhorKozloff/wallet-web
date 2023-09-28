import styled from 'styled-components';

export const SelectWrapper = styled.div`

    position: relative;

    &:hover {
        fill: var(--active-blue);
        box-shadow: 0 5px 5px -5px rgba(255, 101, 150, 0.9);
    }
    
`;
export const IconSVG = styled.svg`
    pointer-events: none;
`;
export const SelectBtn = styled.button`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid var(--gray);
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 1.47;
    background: none;
    cursor: pointer;
    outline: none;
    color: var(--gray);
    & svg {
        &.rotated-svg {
            transform: rotateX(180deg);
        }
  
    }
`;

export const SelectOptionsList = styled.ul`
    width: 100%;
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 1;
    background-color: #f1f2f7;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    
`;
export const SelectOptionsItem = styled.li`
    text-align: start;
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 1.47;
    cursor: pointer;
    padding: 5px 21px 5px 20px;
    border-radius: 10px;
    &:hover {
        background-color: var(--background-gray);
        color: var(--pink);
    }

`;