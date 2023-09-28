import { Section, Container, ExchangeRates } from 'components';
import React from 'react';
import Media from 'react-media';

export const ExchangeRatesPage = () => {

    return (
        <>
            <Media query="(max-width: 767px)" render={() =>
                (
                    <Section className="exchange-rating">
                        <Container style={{minHeight: '100vh'}}>
                            <ExchangeRates/>
                        </Container>
                    </Section>      
                )}
            />
        
        </>
    );
};