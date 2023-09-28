import { PasswordSecureLable } from './PasswordSecureLable.styled';
import { useEffect, useState } from 'react'; 
import { secureLabelCreator } from 'helpers';
import React from 'react';

interface IProps {
    data: string;
}

interface IState {
    width: string,
    color: string,
}
export const PasswordSecureLableComponent = ({data}: IProps) => {

    const [secureLableProps, setSecureLableProps] = useState<IState>(
        {
            width: '0',
            color: 'inherit',
        }
    );
    //1. Красный - меньше 6 символов - 25%
    //2.Желтый - больше 6 символов - 50%
    //3.Желто-Зеленый - больше 6 сиволов и буквы - 75%
    //4.Зеленый - больше 6 сиволов, буквы, Большие буквы - 100%
    
    useEffect(() => {
        setSecureLableProps(secureLabelCreator(data));      
    },[data]);

    return (
        <>
            {data !== null && <PasswordSecureLable secureLableProps={secureLableProps}/>}
        </>   
    );
};