import {Container, Section, TransactionTable, FormBar} from 'components';

import Media from 'react-media';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useSelectorAndDispatch';
import React from 'react';
import { fetchAllTransactions } from 'redux/operations';
import { TransactionTablePlugIn } from 'components/TransactionTablePlugIn/TransactionTablePlugIn';

export const HomePage = () => {

    const dispatch = useAppDispatch();
    
    const { transactions, error } = useAppSelector(state => state.allTransactionsStoreData);
    const { user } = useAppSelector(state => state.userStatus);

    useEffect(() => {
        if (transactions === null) {
            dispatch(fetchAllTransactions(user.token));
        }

    },[dispatch, transactions, user.token]);

    return (
        <>
            {error && <div>
                <p>
            Error: {error}
                </p>
            Oops! Something wrong! Please try again later
            </div>}

            <Media query="(min-width: 1280px)" render={() =>
                (
                    <Section style={{width: '100%', paddingTop: '46px', paddingLeft: '69px', flexDirection: 'column-reverse'}}>
                        <Container>
                            {transactions && transactions.length !== 0 && <TransactionTable/>}
                            {(!transactions || transactions.length === 0) && 
                                <div style={{position: 'fixed', bottom: '18px', right: '200px'}}>
                                    <TransactionTablePlugIn/>
                                </div>}
                        </Container>   
                        <Container style={{width: '1246px', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>
                            <FormBar/>
                        </Container>                        
                        
                    </Section>
                )}
            />
            <Media query="(max-width: 1279px)" render={() =>
                (
                    <Section className="home-section" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Container className="home-container">
                            {transactions && transactions.length !== 0 && <TransactionTable/>}
                            {(!transactions || transactions.length === 0) && <TransactionTablePlugIn/>}
                        </Container>
                        <Container style={{position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>
                            <FormBar/>
                        </Container>
                    </Section>
                )}
            />
            
        </>
    );
};
