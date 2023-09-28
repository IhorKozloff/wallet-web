import styled from 'styled-components';

export const LogoWrapper = styled.ul`
    display: flex;
    align-items: center;
    
    & li:first-of-type {
        margin-right: 16px;
    }

    & #logo-icon {
        width: 30px;
        height: 30px;
    }

    & #icon-Wallet {
        width: 74px;
        height: 17px;
    }

    @media screen and (min-width: 768px) {
        & #logo-icon {
            width: 40px;
            height: 40px;
        }

        & #icon-Wallet {
            width: 121px;
            height: 40px;
        }
    }
`;