import { BsFillInfoSquareFill } from 'react-icons/bs';
import { PasswordTooltipWrapper, TooltipText } from './PasswordTooltip.styled';
import React from 'react';

export const PasswordTooltip = () => {

    return (
        <PasswordTooltipWrapper>
            <TooltipText className="tooltip-text">
                The password must be more than 6 characters long and may contain both uppercase and lowercase letters.
            </TooltipText>
            <BsFillInfoSquareFill/>
        </PasswordTooltipWrapper>
    );
};