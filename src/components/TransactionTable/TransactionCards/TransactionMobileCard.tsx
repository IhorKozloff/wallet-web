import { ITransactionDetails } from 'types/transaction';
import { TransactionCardListItem } from './TransactionMobileCard.styled';
import { TransactionRemoveBtn } from './TransactionRemoveBtn/TransactionRemoveBtn';
import { useRemoveAndRefetch } from 'hooks/useRemoveAndRefetch';
import React from 'react';
import { format } from 'date-fns';

export const TransactionMobileCard = ({id, date: {day, month, year}, comment, sum, category, type, balance}: ITransactionDetails) => {

    const removeAndRefetch = useRemoveAndRefetch();

    const hendleRemoveButtonClick = async () => {

        removeAndRefetch(id);
    };
        
    return (
        <>
            <ul>
                <TransactionCardListItem>
                    <TransactionRemoveBtn removeAction={hendleRemoveButtonClick}/>
                    <span className="transaction__tittle date">Date</span>
                    <span className="transaction__value date">{format(new Date(day, month, year), 'dd/MM/yyyy')}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className="transaction__tittle type">Type</span>
                    <span className="transaction__value type">{type === 'income' ? '+' : '-'}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className="transaction__tittle category">Category</span>
                    <span className="transaction__value category">{category}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className="transaction__tittle comment">Comment</span>
                    <span className="transaction__value comment">{comment}</span>
                </TransactionCardListItem>

                <TransactionCardListItem type={type}>
                    <span className="transaction__tittle sum">Sum</span>
                    <span className="transaction__value sum">{sum}</span>
                </TransactionCardListItem>

                <TransactionCardListItem>
                    <span className="transaction__tittle balance">Balance</span>
                    <span className="transaction__value balance">{balance}</span>
                </TransactionCardListItem>

            </ul>  
        </>   
    );
};