import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationBarWrapper = styled.div`

`; 
export const NavigationList = styled.ul`
    
    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
    }
    
`;
export const NavigationItem = styled.li`
   
    @media screen and (max-width: 767px) {
        &:not(:last-of-type) {
            margin-right: 32px;
        }
    }

    &:not(:last-of-type) {
        margin-bottom: 12px;
    }
`;
export const NavigationButton = styled.button`

    svg {
        fill: var(--blue);
    }

    &:hover {
        svg {
            fill: var(--active-blue);
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        }
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;

    & span {
        margin-left: 20px;
        font-family: var(--secondaryFont);
        font-size: 18px;
        line-height: 27px;
        color: var(--black);
    }
`;