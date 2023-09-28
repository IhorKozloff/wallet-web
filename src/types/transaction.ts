import { constantValues } from "config/constantValues";
import { IExpenseData, IIncomeData } from "redux/slices/transactionsSlice";

export const KnownTransactionTypes = ['income', 'expense'] as const;
export const KnownTransactionCategories = ['main', 'house', 'children', 'development', 'food', 'basic', 'products', 'car', 'health', 'child care', 'household', 'education', 'leisure', 'other', 'salary'] as const;

const KnowneMonth = [...constantValues.DATE.monthDataSet.data.map(({value}) => value)] as const;
export type MonthType = typeof KnowneMonth[number] | 'all';

export type TransactionType = typeof KnownTransactionTypes[number]
export type TransactionCategory = typeof KnownTransactionCategories[number]

export interface IFilterParams {
    month?: MonthType;
    year?: string;
}
export interface ITransactionDate {
    day: number,
    month: number,
    year: number
}

export interface IOwner {
    name?: string;
    email: string;
}

export interface ITransaction {
    id: string;
    date: ITransactionDate,
    type: TransactionType,
    category: TransactionCategory,
    comment?: string,
    sum: number,
    owner: IOwner
}

export interface ITransactionDetails extends ITransaction{
    balance: number;
}

export type TransactionFormData = Omit<ITransaction, 'id' | 'owner' | 'sum'> & { sum: string }

export interface ICAtegoriesResponse {
    expense: IExpenseData[];
    income: IIncomeData;
}