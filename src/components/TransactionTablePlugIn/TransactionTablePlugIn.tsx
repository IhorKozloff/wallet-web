import React from 'react';
import { ArrowWrapper, PlugWrapper, TextBox, ImageBox } from './TransactionTablePlugIn.styled';

export const TransactionTablePlugIn = () => {
    return (
        <PlugWrapper>
            <ImageBox>

            </ImageBox>
            <TextBox>
                <h1 style={{textAlign: 'center'}}>
                You don't have <br/>any transactions yet.
                </h1>
                <div style={{display: 'flex'}}>
                    <h2 className="pointer">
                    Click to add a transaction
                    </h2>
                    <ArrowWrapper className="arrow-wrapper">

                    </ArrowWrapper>
                </div>
            </TextBox>

        </PlugWrapper>
    );
};