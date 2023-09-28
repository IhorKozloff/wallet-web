import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

export const AuthFormWrapper = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border-radius: 20px;
    padding: 32px 20px 36px 20px;
    box-sizing: border-box;

    &.login-form {
        padding: 107px 20px;

        @media screen and (min-width: 768px) {
            padding: 40px 59px 66px 65px;
        }
    }

    @media screen and (min-width: 768px) {
        padding: 40px 59px 66px 65px;
    }

    & input {
        width: 100%;
    }
`;

export const FieldsList = styled.ul`
    margin-top: 60px;
    margin-bottom: 40px;
    width: 100%;
    & li {
        position: relative;
        border-bottom: 1px solid var(--light-gray);
        padding-bottom: 6px;
        padding-left: 55px;

        &:not(last-of-type) {
            margin-bottom: 40px;
        }
        & svg {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`;

export const AuthFormInput = styled(Field)`
    outline: none;
    border: none;
    margin: 0;
    padding: 0;

    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--regular);

    font-size: 18px;
    line-height: 27px;

    color: var(--gray);
`;

export const AuthButton = styled.button`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--white);
    background-color: var(--green);
    border-radius: 20px;

    &:active {
    transform: scale(0.9);
    }
    margin-bottom: 20px;
`;

export const RedirectButton = styled(Link)`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--active-blue);
    border: 1px solid var(--active-blue);
    border-radius: 20px;
    text-decoration: none;

    &:active {
        transform: scale(0.9);
    }
`;
