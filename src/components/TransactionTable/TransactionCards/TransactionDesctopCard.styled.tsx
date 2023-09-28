import styled from 'styled-components';

interface IProps {
    type?: 'income' | 'expense'
}

export const TransactionDesctopCardListItem = styled.li<IProps>`
    padding: 12px 20px 15px 20px;
    display: flex;
    //justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom: 1px solid var(--transaction-underline-color);    

    & .remove-btn-wrapper {
        position: absolute;
        left: 10px; 
        right: 0;
    }

    & .transaction__value {
        font-family: var(--baseFont);
        font-weight: var(--regular);
        font-size: 16px;
        line-height: 24px;

        &.sum {
            color: ${(props: IProps) => props.type === 'income' ? 'var(--green)' : 'var(--pink)'};
        }
    }

    @media screen and (min-width: 768px) {
        & span {
            display: block;
        }
        
        & span.transaction__value.date {
            width: 78px;
        }
        & span.transaction__value.type {
            width: 10px;
            margin-left: 42px;
        }
        & span.transaction__value.category {
            width: 100px;
            display: flex;
            justify-content: center;
            margin-left: 45px;
        }
        & span.transaction__value.comment {
            width: 190px;
            display: flex;
            justify-content: center;
            margin-left: 5px;
        }
        & span.transaction__value.sum {
            width: 105px;
            display: flex;
            justify-content: center;
            margin-left: 5px;
        }
        & span.transaction__value.balance {
            width: 90px;
            display: flex;
            justify-content: end;
            margin-left: 5px;
        }
    }
`;