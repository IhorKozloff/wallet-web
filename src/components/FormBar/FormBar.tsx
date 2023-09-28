import { TransactionAddForm, ButtonRound } from 'components';
import { FormEnabledButtonWrapper } from './FormBar.styled';
import { useState, useEffect } from 'react';
import { useAddAndRefetch } from 'hooks/useAddAndRefetch';
import React from 'react';
import { TransactionFormData } from 'types/transaction';

export const FormBar = () => {

    const addAndRefetchTransaction = useAddAndRefetch();

    const [enabledBarStatus, setEnabledBarStatus] = useState(false);
    const [transactionAddData , setTransactionAddData] = useState<TransactionFormData | null>(null);

    const showBarCtrl = () => {
        setEnabledBarStatus(!enabledBarStatus);
    };

    useEffect(() => {

        if (!transactionAddData) {
            return;
        }

        addAndRefetchTransaction(transactionAddData);
        setTransactionAddData(null);

    },[transactionAddData, addAndRefetchTransaction]);

    return(
        <>
            <FormEnabledButtonWrapper>
                <ButtonRound operationType="income" action={showBarCtrl}/>
            </FormEnabledButtonWrapper>
                
            {enabledBarStatus === true && <TransactionAddForm setTransactionAddData={setTransactionAddData} showBarCtrl={showBarCtrl}/>}
        </>
    );
};