import React from 'react';
import  { TransactioCardRemoveBtn } from './TransactionRemoveBtn.styled';
import {MdDeleteForever} from 'react-icons/md';

interface IProps {
    removeAction: () => void
}
export const TransactionRemoveBtn = ({removeAction}: IProps) => {

    return (
        <TransactioCardRemoveBtn onClick={removeAction} className="transactio-card-remove-btn">
            <MdDeleteForever/>
        </TransactioCardRemoveBtn>
    );
};