import { LayoutComponentsSection, NavigationAndBalanceWrapper } from './LayoutComponentsBar.styled';
import { NavigationBar, ExchangeRates, TotalBalance } from 'components';
import React from 'react';
import Media from 'react-media';

export const LayoutComponentsBar = () => {

    return (
        <LayoutComponentsSection>
            <NavigationAndBalanceWrapper>
                <nav>
                    <NavigationBar/>
                </nav>

                <TotalBalance/>
            </NavigationAndBalanceWrapper>

            <Media query="(min-width: 768px)" render={() =>
                (
                    <ExchangeRates/>
                )}
            />

        </LayoutComponentsSection>
    );
};