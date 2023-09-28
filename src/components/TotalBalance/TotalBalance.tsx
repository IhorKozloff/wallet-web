import React from 'react';
import { TotalBalanceWrapper, TotalBalanceTittleText, TotalBalanceValueWrapper, TotalBalanceMoneySign, TotalBalanceValueArea} from './TotalBalance.styled';
import { useCreateDataToRender } from 'hooks/useCreateDataToRender';

export const TotalBalance = () => {

    const { totalBalance } = useCreateDataToRender();

    return (
        <TotalBalanceWrapper className="total-balance">
            <TotalBalanceTittleText className="total-balance__tittle-text">your balance</TotalBalanceTittleText>

            <TotalBalanceValueWrapper className="total-balance__value-wrapper">
                <TotalBalanceMoneySign className="total-balance__money-sign">₴</TotalBalanceMoneySign>
                <TotalBalanceValueArea className="total-balance__value">{totalBalance}</TotalBalanceValueArea>
            </TotalBalanceValueWrapper>
            
        </TotalBalanceWrapper>
    )
}