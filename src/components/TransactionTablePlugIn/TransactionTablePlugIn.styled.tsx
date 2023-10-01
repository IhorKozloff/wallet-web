import styled from 'styled-components';
import plugImg from '../../img/transaction-plug.png';

interface IProps {
    screen: 'mobile' | 'tablet' | 'desktop';
}

export const PlugWrapper = styled.div<IProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${(props) => props.screen === 'tablet' && 'height: 500px;'}
    ${(props) => props.screen === 'mobile' && 'height: 250px;'}
`;

export const ImageBox = styled.div`
    width: 100%;
    height: 50%;
    background-image: url('${plugImg}');
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
`;
export const TextBox = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const TextBoxTitle = styled.p<IProps>`
    font-size: 36px;
    font-weight: 500;
    ${(props) => props.screen === 'tablet' && 'font-size: 28px; margin-top: 20px;'}
    ${(props) => props.screen === 'mobile' && 'font-size: 18px; margin-top: 20px;'}
`;