import styled from 'styled-components';

interface IProps {
    type?: 'income' | 'expense'
}

export const TransactioCardRemoveBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: var(--light-gray);
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
export const TransactionCardListItem = styled.li<IProps>`
    padding: 12px 20px 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:first-of-type {
        position: relative;
        padding-top: 20px;
    }

    &:not(:last-of-type) {
        border-bottom: 1px solid var(--transaction-underline-color);
    }

    &::after {
        content: '';
        width: 5px;
    height: 100%;
    background-color: var(--pink);
    position: absolute;
    left: 0;
    top: 0;
    }

    & .transaction__tittle {
        font-family: var(--baseFont);
        font-weight: var(--bold);
        font-size: 18px;
        line-height: 27px;
    }
    & .transaction__value {
        font-family: var(--baseFont);
        font-weight: var(--regular);
        font-size: 16px;
        line-height: 24px;
        &.sum {
            color: ${({type}: IProps) => type && type === 'income' ? 'var(--green)' : 'var(--pink)'};
        }
    }
`;
