import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from 'API/UserService';
import { ILoginData } from 'types/user';

export const fetchLogin = createAsyncThunk('fetchLogin', async (loginData: ILoginData, thunkAPI) => {
    try {
        const result = await UserService.login(loginData);
        return result.data;
    } catch(err) {
        return thunkAPI.rejectWithValue((err as any).response.data.message);
    }

});

export const fetchLogout = createAsyncThunk('fetchLogout', async (token: string) => {
    await UserService.logout(token);
});
