import React from 'react';
import { ExchangeRatesWrapper, ExchangeRatesHead, HeadListItem, ExchangeRatesContent, ExchangeRatesContentItem } from './ExchangeRates.styled';

export const ExchangeRates = () => {

    return (
        <ExchangeRatesWrapper>
            <ExchangeRatesHead className="exchange-rates__head head-list">
                <HeadListItem className="head-list__item">Currency</HeadListItem>
                <HeadListItem className="head-list__item">Purchase</HeadListItem>
                <HeadListItem className="head-list__item">Sale</HeadListItem>
            </ExchangeRatesHead>

            <ExchangeRatesContent className="exchange-rates__list">
                <ExchangeRatesContentItem className="exchange-rates__item">
                    <span className="exchange-rates__currency">USD</span>
                    <span className="exchange-rates__purchase">27.55</span>
                    <span className="exchange-rates__sale">27.65</span>
                </ExchangeRatesContentItem>

                <ExchangeRatesContentItem className="exchange-rates__item">
                    <span className="exchange-rates__currency">EUR</span>
                    <span className="exchange-rates__purchase">30.00</span>
                    <span className="exchange-rates__sale">30.10</span>
                </ExchangeRatesContentItem>

                <ExchangeRatesContentItem className="exchange-rates__item">
                    <span className="exchange-rates__currency">RUB</span>
                    <span className="exchange-rates__purchase">00.00</span>
                    <span className="exchange-rates__sale">00.00</span>
                </ExchangeRatesContentItem>
            </ExchangeRatesContent>
        </ExchangeRatesWrapper>
    );
};