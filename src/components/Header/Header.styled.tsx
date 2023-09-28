import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LogoutBtn = styled.button`
    height: 18px;

    & svg {
        fill: var(--gray);
    }

    &:hover {
    
        svg {fill: var(--black)};
    }
`;
export const UserName = styled.span`
    color: var(--gray);
    margin-right: 8px;
    cursor: pointer;

    &:hover {
        color: var(--black);
    }
`;
export const AuthNavigate = styled.div`
    display: flex;
    align-items: center;
`;