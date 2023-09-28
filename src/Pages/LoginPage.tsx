import { AuthContainer, AuthSection, AuthTittleWrapper, LoginForm } from 'components';
import Media from 'react-media';
import { useAppSelector, useAppDispatch } from 'hooks/useSelectorAndDispatch';
import { fetchLogin } from 'redux/operations/authOperations';
import { FullScreenLoader } from 'components';
import React from 'react';
import { ILoginData } from 'types/user';

export const LoginPage = () => {

    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector(state => state.userStatus);

    const onSubmitLoginForm = async (data: ILoginData) => {
        dispatch(fetchLogin(data));
    };

    return (
        <AuthSection className="login-section">
            <AuthContainer className="container login-page-container">
                <Media query="(min-width: 768px)" render={() =>
                    (
                        <AuthTittleWrapper>
                            <h2>Finance App</h2>
                        </AuthTittleWrapper>
                    )}
                />
                <LoginForm onSubmitLoginForm={onSubmitLoginForm}/>
                {isLoading === true && <FullScreenLoader/>}
            </AuthContainer>
        </AuthSection>
    );
};