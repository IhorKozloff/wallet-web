import { TransactionCategory } from "./transaction";

export interface ITableCategory {
    categoryColor: string;
    categoryName: TransactionCategory;
    categorySum: number;
}
export interface IDataToProps {
    tableCategories: ITableCategory[],
    tableExpenseSum: string;
    tableIncomeSum: string;
}