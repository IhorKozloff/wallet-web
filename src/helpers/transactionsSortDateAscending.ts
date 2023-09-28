import { ITransaction } from 'types/transaction';

export const transactionsSortDateAscending = (data: ITransaction[]) => {
    return [...data].sort((a,b) => new Date(a.date.year, a.date.month, a.date.day).getTime() - new Date(b.date.year, b.date.month, b.date.day).getTime());
};