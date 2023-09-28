import styled from 'styled-components';

export const TransactionTableWrapper = styled.div`
`;
export const TransactionTableList = styled.ul`

   @media screen and (min-width: 1280px) {
    width: 715px;
   }
`;
export const TransactionTableItem = styled.li`
    @media screen and (max-width: 767px) {
        background-color: var(--white);
        border-radius: 10px;
        overflow: hidden;
        
        &:not(:last-of-type) {
            margin-bottom: 8px;
        }
    }
`;
export const TransactionTableListHeader = styled.div`
    height: 58px;
    background-color: var(--white);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 20px;
    box-sizing: border-box;
    & span {
        font-family: var(--baseFont);
        font-weight: var(--bold);
        font-size: 18px;
        line-height: 27px;
    }
    @media screen and (min-width: 1280px) {
        width: 715px;
    }
`;