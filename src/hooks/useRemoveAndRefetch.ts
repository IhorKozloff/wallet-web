import { TransactionsService } from 'API/TransactionsService';
import { useAppSelector, useAppDispatch } from 'hooks/useSelectorAndDispatch';
import { fetchAllTransactions } from 'redux/operations';
import { setError } from 'redux/slices/transactionsSlice';
import { AppError } from 'types/error';

export const useRemoveAndRefetch = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector(state => state.userStatus.user);

    return async (id: string) => {

        const result = await TransactionsService.remove(id, token);

        if (result instanceof AppError) {
            dispatch(setError(result.message));
        } else {
            dispatch(fetchAllTransactions(token));
        }
    };
};
