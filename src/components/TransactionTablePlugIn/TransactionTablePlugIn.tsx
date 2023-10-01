import React from 'react';
import { PlugWrapper, TextBox, ImageBox, TextBoxTitle } from './TransactionTablePlugIn.styled';

interface IProps {
    screen: 'mobile' | 'tablet' | 'desktop';
}

export const TransactionTablePlugIn = ({screen}: IProps) => {

    return (
        <PlugWrapper screen={screen}>
            <ImageBox>

            </ImageBox>
            <TextBox>
                <TextBoxTitle style={{textAlign: 'center'}} screen={screen}>
                    You don't have any transactions yet.
                </TextBoxTitle>
            </TextBox>

        </PlugWrapper>

    );
};