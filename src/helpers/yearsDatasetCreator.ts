import { constantValues } from 'config/constantValues';

interface IData {
    text: string;
    value: string;
}
type YearDataSetCreatorType = (number?: number) => {
    title: 'Year'
    data: IData[]
}

export const yearDataSetCreator: YearDataSetCreatorType = (numberOfYears = constantValues.DATE.defaultNumberOfYearsInInput) => {
    const currentYear = new Date().getFullYear();
    const templateArray = Array(numberOfYears).fill('');

    const totalInitialValue = {
        years: [],
        count: templateArray.length
    };
  
    const { years }: {total: number, years: number[]} = templateArray.reduce((total, item) => {
        if (total.years.length === 0) {
            total.years.push(currentYear);
        } else {
            total.years.push(total.years[total.years.length - 1] - 1);
        }
        total.count -= 1;
        return total;
    }, totalInitialValue);

    const yearsObjectArray =  years.map(item => {
        return { text: `${item}`, value: `${item}`};
    });

    return {
        title: 'Year',
        data: yearsObjectArray
    };
};