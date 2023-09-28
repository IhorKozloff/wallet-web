import React from 'react';
import { LogoWrapper } from './WalletLogo.styled';
import { IconSVG } from 'helpers/IconSvg';

export const WalletLogo = () => {

    return (
        <LogoWrapper className="logo">
            <li>
                <IconSVG id="logo-icon" className="logo__icon"></IconSVG>
            </li>
            <li>
                <IconSVG id="icon-Wallet" className="logo__text"></IconSVG>
            </li>
        </LogoWrapper>
    );
};