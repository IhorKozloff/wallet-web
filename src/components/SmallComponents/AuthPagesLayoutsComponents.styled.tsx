import styled from 'styled-components';
import { Section } from 'components';

import bottomLeftImgTablet from '../../img/authPage/auth-page-section-decor-bottom-left-tablet.png';
import topRightImgTablet from '../../img/authPage/auth-page-section-decor-top-right-tablet.png';
import decorMainImageTablet from '../../img/authPage/auth-page-section-decor-main-image-tablet.png';

import bottomLeftImgDesctop from '../../img/authPage/auth-page-section-decor-bottom-left-desctop.png';
import topRightImgDesctop from '../../img/authPage/auth-page-section-decor-top-right-desctop.png';
import decorMainImageDesctop from '../../img/authPage/auth-page-section-decor-main-image-desctop.png';

export const AuthSection = styled(Section)`
    width: 100%;
    background-color: var(--white); 

    @media screen and (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 48px;

        background-color: var(--background-light-grey);
        background-repeat: no-repeat;
        background-image: url('${bottomLeftImgTablet}'), url('${topRightImgTablet}');
        background-position: left bottom, right top;

        &.login-section {
            padding-bottom: 196px;
        }
    }

    @media screen and (min-width: 1280px) {
        padding: 52px 91px 52px 66px;

        background-color: var(--background-light-grey);
        background-repeat: no-repeat;
        background-image: url('${bottomLeftImgDesctop}'), url('${topRightImgDesctop}');
        background-position: left bottom, right top;

        &.login-section {
            padding: 136px 91px 116px 76px;
        }
    }

`;

export const AuthContainer = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 320px) {
        width: 320px;
    }
    @media screen and (min-width: 768px) {
        width: 533px;
    }
    @media screen and (min-width: 1280px) {
        width: 1126px;
        flex-direction: row;
    }
`;

export const AuthTittleWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    padding-right: 36px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    background-repeat: no-repeat;
    background-image: url('${decorMainImageTablet}');
    background-position: left center;
    background-size: contain;

    & h2 {
        font-family: var(--secondaryFont);
        font-style: normal;
        font-weight: var(--regular);
        font-size: 30px;
        line-height: 45px;
    }

    @media screen and (min-width: 1280px) {
        height: 600px;
        margin-right: 140px;
        background-image: url('${decorMainImageDesctop}');
        background-position: center bottom 101px;
        justify-content: end;
        align-items: center;
        padding-right: 0;
        margin-bottom: 25px;
    }
`;
