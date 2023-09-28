import { TransactionDesctopCardListItem } from './TransactionDesctopCard.styled';
import { sumConverter } from 'helpers';
import { TransactionRemoveBtn } from './TransactionRemoveBtn/TransactionRemoveBtn';
import { useRemoveAndRefetch } from 'hooks/useRemoveAndRefetch';
import { ITransactionDetails } from 'types/transaction';
import { format } from 'date-fns';
import React from 'react';

export const TransactionDesctopCard = ({id, date: {year, month, day}, comment, sum, category, type, balance}: ITransactionDetails) => {

    const removeAndRefetch = useRemoveAndRefetch();

    const hendleRemoveButtonClick = async () => {

        removeAndRefetch(id);
    };

    return (
        <ul>
            <TransactionDesctopCardListItem className="transaction-card-list-item content" type={type} >
                <span className="transaction__value date">{format(new Date(year, month, day), 'yyyy.MM.dd')}</span>
                <span className="transaction__value type">{type === 'income' ? '+' : '-'}</span>
                <span className="transaction__value category">{category}</span>
                <span className="transaction__value comment">{comment}</span>
                <span className="transaction__value sum">{sumConverter(sum)}</span>
                <span className="transaction__value balance">{sumConverter(balance)}</span>
                <div className="remove-btn-wrapper">
                    <TransactionRemoveBtn removeAction={hendleRemoveButtonClick}/>
                </div>
                
            </TransactionDesctopCardListItem>
        </ul>
    );
};
