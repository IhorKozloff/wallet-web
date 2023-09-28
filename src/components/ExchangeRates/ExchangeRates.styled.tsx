import styled from 'styled-components';
import backgroundImageCurrency from '../../img/background-image-currency.png';

export const ExchangeRatesWrapper = styled.div`
    color: var(--white);
    border-radius: 32px;
    overflow: hidden;


    @media screen and (min-width: 768px) and (max-width: 1279px) {
        width: 336px;
    }
`;
export const ExchangeRatesHead = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: var(--blue);
   padding: 11px 17px 12px 20px;
   opacity: 0.8;

    @media screen and (min-width: 768px) {
        padding: 11px 25px 12px 20px;
    }
    @media screen and (min-width: 1280px) {
        padding: 16px 64px 17px 44px;
    }
`;
export const HeadListItem = styled.li`
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--bold);
    font-size: 18px;
    line-height: 27px;
`;
export const ExchangeRatesContent = styled.ul`
    background-color: var(--active-blue);
    background-image: linear-gradient(rgba(255, 255, 255, 0.2) -8.67%, rgba(255, 255, 255, 0) 116.22%), url('${backgroundImageCurrency}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    padding: 12px 20px 16px 20px;
    box-sizing: border-box;
    
    & span {
        display: block;
    }
    height: 124px;

    @media screen and (min-width: 768px) {
        height: 140px;
    }
    @media screen and (min-width: 1280px) {
        height: 287px;
        padding: 12px 61px 16px 58px;
    }
`;

export const ExchangeRatesContentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-of-type) {
        margin-bottom: 12px;
    }
`;