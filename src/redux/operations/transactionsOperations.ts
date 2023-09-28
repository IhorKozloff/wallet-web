import { createAsyncThunk } from '@reduxjs/toolkit';
import { TransactionsService } from 'API/TransactionsService';
import { ICAtegoriesResponse, IFilterParams, ITransaction } from 'types/transaction';
import { AppError } from 'types/error';
import { ICategories } from 'redux/slices/transactionsSlice';

export const fetchAllTransactions = createAsyncThunk<ITransaction[], string, { rejectValue: string }>(
    'fetchAllTransactions', 
    async (token: string, thunkApi) => {
        try {
            return await TransactionsService.getAll(token);
        } catch (err: any) {
            const error = err as AppError;
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
interface IQueryParams extends IFilterParams{
    token: string
}

export const fetchCategories= createAsyncThunk<ICAtegoriesResponse, IQueryParams, { rejectValue: string }>(
    'fetchCategories', 
    async (queryParams: IQueryParams, thunkApi) => {
        try {
            const response = await TransactionsService.filterCategories(queryParams);
            return response;
        } catch (err: any) {
            const error = err as AppError;
            return thunkApi.rejectWithValue(error.message);
        }
    }
);