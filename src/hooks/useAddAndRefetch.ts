import { TransactionsService } from 'API/TransactionsService';
import { useAppSelector, useAppDispatch } from 'hooks/useSelectorAndDispatch';
import { fetchAllTransactions } from 'redux/operations';
import { TransactionFormData } from 'types/transaction';

export const useAddAndRefetch = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector(state => state.userStatus.user);

    return async (data: TransactionFormData) => {

        const response = await TransactionsService.add(data, token);
  
        if (response) {
            dispatch(fetchAllTransactions(token));
        }
        
    };
};
