
import { createSlice, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllTransactions, fetchCategories } from '../operations';
import { fetchLogout } from '../operations';
import { ITransaction, TransactionCategory } from 'types/transaction';

export interface IExpenseData {
    categoryType: TransactionCategory,
    total: number
}

export interface IIncomeData {
    total: number
}

export interface ICategories {
    expenseData: IExpenseData[];
    incomeData: IIncomeData;
}
export interface ITransactionState {
    transactions: ITransaction[] | null,
    isLoading: boolean;
    error: string | null;
    categories: ICategories
    
}
const initialState: ITransactionState = {
    transactions: null,
    isLoading: false,
    error: null,
    categories: {
        expenseData: [],
        incomeData: {
            total: 0
        }
    }
};
export const transactionsSlice = createSlice({
    name: 'transactions',

    initialState,
    reducers: {
        setError: (state, actions) => {
            state.error = actions.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<ITransactionState>) => {

        builder.addCase(fetchAllTransactions.pending, (state) => {
            state.isLoading = true;
            state.error = initialState.error;
        });

        builder.addCase(fetchAllTransactions.fulfilled, (state, action) => {
            state.isLoading = false;
            state.transactions = action.payload as ITransaction[];
            state.error = initialState.error;
        });

        builder.addCase(fetchAllTransactions.rejected, (state, action) => {
            state.isLoading = false;

            if (action.payload) {
                state.error = action.payload;
            }
            
        });

        builder.addCase(fetchLogout.fulfilled, (state, action) => {
            return state = initialState;
        });

        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories.expenseData = action.payload.expense;
            state.categories.incomeData = action.payload.income;
        });

        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = `${action.payload}`;
        });
    }
});

export default transactionsSlice.reducer;
export const { setError } = transactionsSlice.actions;