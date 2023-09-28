import styled from 'styled-components';
import plugImg from '../../img/transaction-plug.png';
import arrow from '../../img/arrow.png';

export const PlugWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ArrowWrapper = styled.div`
    width: 150px;
    height: 50px;

    background-image: url('${arrow}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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