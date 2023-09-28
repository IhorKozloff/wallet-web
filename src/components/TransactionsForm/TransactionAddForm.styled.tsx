import styled from 'styled-components';
import { Container } from 'components';
import incomeWallpaper from '../../img/income-add-image.png';
import expenseWallpaper from '../../img/expense-image.png';
import { Field } from 'formik';

interface IProps {
    formsStatus: 'income' | 'expense',
}

export const TransactionAddFormWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
    @media screen and (max-width: 767px) {
        top: 62px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const TransactionAddFormContainer = styled(Container)`
    width: 540px;
    background-color: var(--white);
    padding: 40px 73px;
    border-radius: 20px;

    @media screen and (max-width: 767px) {
        padding-top: 20px;
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }
`;
export const FormTittle = styled.p`
    font-family: var(--secondaryFont);
    font-weight: var(--regular);
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 40px;
`;
export const CustomRadioButton = styled.input.attrs({ type: 'radio' })`
    -webkit-appearance: none;
    cursor: pointer;
    color: var(--gray);
`;
export const ModalTextInput = styled(Field)`
    margin: 0;
    padding: 0 0 8px 20px;
    width: 100%;
    -webkit-appearance: none;
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid var(--gray);
`; 

export const FormButtonsList = styled.ul`
    & li {
        &:not(:last-of-type) {
            margin-bottom: 20px;
        }
    }
`;
export const FormChangerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;
export const CustomRadioButtonWrapper = styled.div<IProps>`

    &.income-checkbox label  {
        color: ${(props: IProps) => props.formsStatus === 'income' ? 'var(--green)' : 'var(--gray)'};
    };

    &.expense-checkbox label {
        color: ${(props: IProps) => props.formsStatus === 'expense' ? 'var(--pink)' : 'var(--gray)'};
    }

`;
export const RangeSwitcherBtn = styled.input.attrs({type: 'range'})<IProps>`
    -webkit-appearance: none;
    outline: none;
    width: 80px;
    height: 40px;
    border: 1px solid var(--gray);
    border-radius: 30px;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("${(props: IProps) => props.formsStatus === 'expense' ? expenseWallpaper : incomeWallpaper}");
    }
`;

export const ConfirmButton = styled.button`
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
export const CancelButton = styled.button`
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

export const DateAndMoneySet = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 32px; 
    margin-bottom: 40px;

    & svg {
        fill: #4A56E2;
    }
`;