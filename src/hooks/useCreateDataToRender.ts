import { useAppSelector } from 'hooks/useSelectorAndDispatch';
import { calculateBalance, transactionsSortDateAscending } from 'helpers';
import { ITransactionDetails } from 'types/transaction';

export const useCreateDataToRender = (): {totalBalance: number, balancedData: ITransactionDetails[]} => {

    const { transactions } = useAppSelector(state => state.allTransactionsStoreData);
    if (!transactions) {
        return {
            totalBalance: 0,
            balancedData: []
        };
    }
    const sortedData = transactionsSortDateAscending(transactions!);

    const [totalBalance, balancedData] = calculateBalance(sortedData);

    return {
        totalBalance,
        balancedData
    };
};