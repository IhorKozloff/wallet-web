import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchLogin, fetchLogout } from '../operations/authOperations';
import Notiflix from 'notiflix';

interface IUser {
    name: string | null;
    email: string | null;
    token: string;
}
interface ITempUSerData {
    email: null | string,
    password: null | string;
}
interface IUserState {
    user: IUser;
    isLoading: boolean;
    isLogin: boolean;
    errorLogin: string | null;
    temporaryUserData: ITempUSerData
}
const initialState: IUserState = {
    user: {
        name: null,
        email: null,
        token: ''
    },
    isLoading: false,
    isLogin: false,
    errorLogin: null,
    temporaryUserData: {
        email: null,
        password: null,
    }
};        

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveRegisterData: (state, action: PayloadAction<ITempUSerData>) => {
            state.temporaryUserData = action.payload;
        },
        clearRegisterData: (state) => {
            state.temporaryUserData = initialState.temporaryUserData;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.token = action.payload.token;

            state.isLoading = false;
            state.isLogin = true;
        });

        builder.addCase(fetchLogin.pending, (state) => {
            state.isLoading = true;
            state.errorLogin = null;
        });

        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.errorLogin = `${action.payload}`;
            state.isLoading = false;
            Notiflix.Notify.failure('Please try one more tome, maybe server has been sleeping.)');
        });

        builder.addCase(fetchLogout.fulfilled, (state) => {
            state.user.name = null;
            state.user.email = null;
            state.user.token = '';

            state.isLoading = false;
            state.isLogin = false;
        });

        builder.addCase(fetchLogout.pending, (state) => {
            state.isLoading = true;
        });
    }
});

export const { saveRegisterData, clearRegisterData } = userSlice.actions;
export default userSlice.reducer;