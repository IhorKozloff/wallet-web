import { ITransaction } from 'types/transaction';

export const transactionsSortDateDescending = (data: ITransaction[]) => {
    return [...data].sort((a,b) => new Date(b.date.year, b.date.month, b.date.day).getTime() - new Date(a.date.year, a.date.month, a.date.day).getTime());
};