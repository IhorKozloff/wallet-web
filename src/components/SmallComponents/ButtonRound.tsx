import React from 'react';
import { StyledButtonRound, HorizontalIcon, VerticalIcon } from './ButtonRound.styled';

interface IProps {
    operationType: 'income' | 'expense';
    action: () => void
}

export const ButtonRound = ({operationType, action}: IProps) => {
   
    return(
        <>
            {operationType === 'income' && <StyledButtonRound 
                type="button" 
                className="green-round-button" 
                background="var(--green)" 
                shadow="0px 6px 15px rgba(36, 204, 167, 0.5)"
                onClick={action}>
                <HorizontalIcon/>
                <VerticalIcon/>
            </StyledButtonRound>}

            {operationType === 'expense' && <StyledButtonRound 
                type="button" 
                className="green-round-button" 
                background="var(--pink)" 
                shadow="0px 6px 15px rgba(255, 101, 150, 0.5)"
                onClick={action}>
                <HorizontalIcon/>
            </StyledButtonRound>}
        </>
    );
};