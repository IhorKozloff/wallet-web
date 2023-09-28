import { ITransaction, ITransactionDetails } from 'types/transaction';

export const calculateBalance = (data: ITransaction[]): [number, ITransactionDetails[]] => {
    let totalBalance = 0;

    const balancedData: ITransactionDetails[] = data.map(({type, sum, ...rest}) => {

        type === 'income' ?  totalBalance += sum : totalBalance -= sum;

        return {
            type,
            sum,
            ...rest,
            balance: totalBalance
        };
    });

    return [totalBalance, balancedData];
};