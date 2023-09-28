import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from 'API/UserService';
import { ILoginData } from 'types/user';

export const fetchLogin = createAsyncThunk('fetchLogin', async (loginData: ILoginData) => {
    const response = await UserService.login(loginData);
    return response.data;
});

export const fetchLogout = createAsyncThunk('fetchLogout', async (token: string) => {
    await UserService.logout(token);
});
