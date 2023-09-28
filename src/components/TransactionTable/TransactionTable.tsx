import { TransactionTableWrapper, TransactionTableList, TransactionTableItem, TransactionTableListHeader } from './TransactionTable.styled';
import { TransactionMobileCard } from './TransactionCards/TransactionMobileCard';
import { TransactionDesctopCard } from './TransactionCards/TransactionDesctopCard';
import Media from 'react-media';
import { useCreateDataToRender } from 'hooks/useCreateDataToRender';
import React from 'react';

export const TransactionTable = () => {

    const { balancedData } = useCreateDataToRender();

    return (
        <TransactionTableWrapper>

            <Media query="(min-width: 768px)" render={() =>
                (
                    <TransactionTableListHeader>
                        <span className="transaction__tittle date" style={{marginRight: '72px'}}>Date</span>
                        <span className="transaction__tittle type" style={{marginRight: '47px'}}>Type</span>
                        <span className="transaction__tittle category" style={{marginRight: '75px'}}>Category</span>
                        <span className="transaction__tittle comment" style={{marginRight: '95px'}}>Comment</span>
                        <span className="transaction__tittle sum" style={{marginRight: '69px'}}>Sum</span>
                        <span className="transaction__tittle balance">Balance</span>
                    </TransactionTableListHeader>
                )}
            />

            <TransactionTableList className="desctop">

                {balancedData.length !== 0 && balancedData.map(item => {
                    return (
                        <TransactionTableItem key={item.id}>

                            <Media query="(max-width: 767px)" render={() =>
                                (
                                    <TransactionMobileCard {...item}/>
                                )}
                            />

                            <Media query="(min-width: 768px)" render={() =>
                                (
                                    <TransactionDesctopCard {...item}/>
                                )}
                            />
                        
                        </TransactionTableItem>
                    );
                })}

            </TransactionTableList>
        </TransactionTableWrapper>
    );
};