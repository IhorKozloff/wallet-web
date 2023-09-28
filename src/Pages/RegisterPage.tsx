import { AuthContainer, AuthSection, AuthTittleWrapper, RegisterForm } from 'components';
import Media from 'react-media';
import { fetchLogin,  } from 'redux/operations/authOperations';
import { useAppDispatch } from 'hooks/useSelectorAndDispatch';
import { useState } from 'react';
import { FullScreenLoader } from 'components';
import { IRegisterData, IRegisterDataInForm } from 'types/user';
import { UserService } from 'API/UserService';
import React from 'react';
import { saveRegisterData } from 'redux/slices/authSlice';
import { omit } from 'lodash';

export const RegisterPage = () => {

    const dispatch = useAppDispatch();
    const [loaderStatus, setLoaderStatus] = useState(false);
    const [registerError, setRegisterError] = useState<string | null>(null);

    const onSubmitRegisterForm = async (userRegisterData: IRegisterDataInForm) => {

        const serverSendData: IRegisterData = {
            email: userRegisterData.email,
            password: userRegisterData.password
        };

        if (userRegisterData.firstName !== '') {
            serverSendData.name = userRegisterData.firstName;
        }

        setLoaderStatus(true);

        const result = await UserService.register(serverSendData);
        if (result.frontEndError) {
            return <div>{result.frontEndError.message}</div>
        }
        
        setLoaderStatus(false);

        dispatch(fetchLogin({email: serverSendData.email, password: serverSendData.password}));
    };

    return (
        <AuthSection className="register-section">
            <AuthContainer className="container register-page-container">

                <Media query="(min-width: 768px)" render={() =>
                    (
                        <AuthTittleWrapper>
                            <h2>Finance App</h2>
                        </AuthTittleWrapper>
                    )}
                />
                
                <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm}/>
                {loaderStatus === true && <FullScreenLoader/>}
            </AuthContainer>
        </AuthSection>
    );
};