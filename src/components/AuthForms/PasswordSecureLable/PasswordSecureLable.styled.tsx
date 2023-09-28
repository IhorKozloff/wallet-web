import styled from 'styled-components';

interface IProps {
    secureLableProps: {
        width: string;
        color: string | null;
    }

}
export const PasswordSecureLable = styled.div<IProps>`
   
    position: absolute;
    bottom: -7px;
    left: 0;

    height: 3px;
    border-radius: 3px;

    width: ${(props: IProps) => props.secureLableProps.width};
    background-color: ${(props: IProps) => props.secureLableProps.color ? props.secureLableProps.color : 'inherit'};


    transition: all 1500ms cubic-bezier(0.4, 0, 0.2, 1);

`;
