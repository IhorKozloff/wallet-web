import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { createChartDoughnutData } from 'helpers';
import { useMemo } from 'react';
import { DoughnutChartWrapper, DoughnutChartTotalSum } from './DoughnutChart.styled';
import { IDataToProps } from 'types/transactionAsProps';
import React from 'react';

interface IProps {
    data: IDataToProps
}
export const DoughnutChart = ({data}: IProps) => {
    const {tableCategories, tableExpenseSum } = data;

    const options = {
        cutout: '70%',
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const memoizedChartDoughnutData = useMemo(
        () => createChartDoughnutData('categories', {initialData: tableCategories}),
        [tableCategories]
    );

    ChartJS.register(ArcElement, Tooltip, Legend);
    
    return (
        <DoughnutChartWrapper>
            <Doughnut 
                data={memoizedChartDoughnutData}
                options={options}
            />
            <DoughnutChartTotalSum>
                {tableExpenseSum}
            </DoughnutChartTotalSum>
        </DoughnutChartWrapper>   
    );
};
