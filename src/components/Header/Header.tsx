import { IconSVG } from 'helpers/IconSvg';
import { WalletLogo } from 'components';
import {HeaderWrapper, LogoutBtn, UserName, AuthNavigate } from './Header.styled';
import { useAppDispatch, useAppSelector } from 'hooks/useSelectorAndDispatch';
import { fetchLogout } from 'redux/operations/authOperations';
import React from 'react';

export const Header = () => {
    const { name, token } = useAppSelector(state => state.userStatus.user);
    const dispatch = useAppDispatch();

    const onLogoutClick = async () => {
        if(token) {
            dispatch(fetchLogout(token));
        }
    };

    return (
        <HeaderWrapper className="header-wrapper">

            <WalletLogo/>

            <AuthNavigate className="user-auth">
                <UserName className="user-auth__name">{name}</UserName>
                <span className="user-auth__separator"></span>
                <LogoutBtn className="user-auth__logout-btn logout_btn" onClick={onLogoutClick}>
                    <IconSVG id="logout-btn-icon" className="logout_btn__icon" height="18" width="18"></IconSVG>
                </LogoutBtn>
            </AuthNavigate>
        </HeaderWrapper>
    );
};