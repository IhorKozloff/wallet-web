import styled from 'styled-components';

export const TotalBalanceWrapper = styled.div`
    background-color: var(--white);
    border-radius: 30px;
    padding: 8px 0 11px 32px;
    margin-top: 28px;
   

    @media screen and (max-width: 767px) {
        margin-top: 12px;
    }
    
`;
export const TotalBalanceTittleText = styled.p`
    font-family: var(--baseFont);
    font-weight: var(--regular);
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;

    color: var(--dark-grey);

`;
export const TotalBalanceValueWrapper = styled.div``;
export const TotalBalanceMoneySign = styled.span`
    font-family: var(--secondaryFont);
    font-weight: var(--regular);
    font-size: 30px;
    line-height: 45px;
    margin-right: 10px;
    margin-bottom: 11px;
    color: var(--black);
`;
export const TotalBalanceValueArea = styled.span`
    font-family: var(--secondaryFont);
    font-weight: var(--bold);
    font-size: 30px;
    line-height: 45px;

    color: var(--black);
`;