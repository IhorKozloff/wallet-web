import styled from 'styled-components';
interface IProps {
    width?: string;
}

export const ModalDatePickerWrapper = styled.div<IProps>`
    width: ${(props: IProps) => props.width || '100%'};
    border-bottom: 1px solid var(--gray);

    & .MuiFormControl-root {
        width: 100%;
    }
    & .MuiInputBase-root {
        height: 32px;

        padding-left: 20px;
        padding-right: 20px;
        margin: 0;
        border: none;

        & input {
            margin: 0;
            padding: 0;
        }
    }
    & .MuiOutlinedInput-notchedOutline {
        border: none;
    }

`;
