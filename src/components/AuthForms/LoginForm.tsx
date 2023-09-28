import { Formik, FormikValues } from 'formik';

import {  WalletLogo } from 'components';
import { AuthButton, RedirectButton, AuthFormWrapper, AuthFormInput, FieldsList } from './AuthForm.styled';
import { IconSVG } from 'helpers/IconSvg';
import React from 'react';
import { ILoginData } from 'types/user';

interface IProps {
    onSubmitLoginForm: ({email, password}: ILoginData) => void;
}

export const LoginForm = ({onSubmitLoginForm}: IProps ) => {

    const initialValues = {
        email: '',
        password: '',
        passwordConfirm: '',
        firstName: ''
    };

    const onSubmitForm = ({email, password}: FormikValues & ILoginData, actions: FormikValues) => {
        onSubmitLoginForm({email, password});
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
            
            <AuthFormWrapper className="login-form">
                <WalletLogo/>
                
                <FieldsList>
                    <li>
                        <IconSVG id="form-email-icon"/>
                        <AuthFormInput className="login-form__email" name="email" type="email" placeholder="Email"/>
                    </li>
                    <li>
                        <IconSVG id="form-password-icon"/>
                        <AuthFormInput className="login-form__password" name="password" type="text" placeholder="Password"/>
                    </li>
                </FieldsList>

                <AuthButton type="submit" className="login-form__login-button">log in</AuthButton>
                <RedirectButton to="/register">register</RedirectButton>
                        
            </AuthFormWrapper>
        </Formik>
    );
};