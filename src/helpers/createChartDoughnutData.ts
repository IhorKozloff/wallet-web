import { ITableCategory } from 'types/transactionAsProps';

interface IChartDoughnutData {
    labels: string[],
    datasets: [
        {
            label: string;
            data: string[];
            backgroundColor: string[],
            borderColor: string[],
            borderWidth: number,
        }
    ],
}
interface IInitialData {
    initialData: ITableCategory[]
}
type CreateChartDoughnutDataTypeFn = (
    name: string,
    object: IInitialData
) => IChartDoughnutData;

export const createChartDoughnutData: CreateChartDoughnutDataTypeFn = (name, { initialData }) => {
    const initial: IChartDoughnutData = {
        labels: [],
        datasets: [
            {
                label: `${name}`,
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            }
        ],
    };

    return initialData.reduce((count, {categoryColor, categoryName, categorySum}) => {      
        count.labels = [...count.labels, categoryName];
        count.datasets[0].data = [...count.datasets[0].data, `${categorySum}`];
        count.datasets[0].borderColor = [...count.datasets[0].borderColor, categoryColor];
        count.datasets[0].backgroundColor = [...count.datasets[0].backgroundColor, categoryColor];
        return count;
    }, initial);
};