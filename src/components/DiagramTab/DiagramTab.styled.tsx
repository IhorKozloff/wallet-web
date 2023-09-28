import styled from "styled-components";
import plug from "img/statistic-plug.png"

export const DiagramTabWrapper = styled.div`
    padding-top: 8px;
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const DoughnutPlug = styled.div`

    margin-bottom: 32px;
    background-image: url('${plug}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @media screen and (min-width: 320px) {
        width: 280px;
        height: 280px;
    }

    @media screen and (min-width: 768px) {
        width: 336px;
        height: 336px;
    }
    @media screen and (min-width: 1280px) {
        width: 288px;
        height: 288px;
    }
`;

export const StatisticContentWrapper = styled.div`
    @media screen and (min-width: 768px) {
        width: 336px;
    }
`;