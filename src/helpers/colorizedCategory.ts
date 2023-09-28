import { constantValues } from 'config/constantValues';
import { TransactionCategory } from 'types/transaction';

export const colorizedCategory = (category: TransactionCategory): string => {
    const colors = constantValues.CATEGORIES.colors;

    const findedItem = colors.find(
        item => item.categoryName === category
    );
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return findedItem !== undefined ? findedItem.categoryColor : randomColor;
};