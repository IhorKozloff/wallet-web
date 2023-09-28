import styled from 'styled-components';

export const DoughnutChartWrapper = styled.div`
    position: relative;
    margin-bottom: 32px;

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
export const DoughnutChartTotalSum = styled.div`
    display: block;
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-weight: var(--bold);
    display: flex;
    justify-content: center;
    align-items: center;
`;