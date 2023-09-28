import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import transactionsSlice from './slices/transactionsSlice';
import userSlice from './slices/authSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const financePersistConfig = {
    key: 'finance',
    storage,
};
const userPersistConfig = {
    key: 'user',
    storage,
};

const financePersistedReducer = persistReducer(financePersistConfig, transactionsSlice);
const userPersistedReducer = persistReducer(userPersistConfig, userSlice);

export const globalStore = configureStore({
    reducer: {
        allTransactionsStoreData: financePersistedReducer,
        userStatus: userPersistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(globalStore);

export type RootState = ReturnType<typeof globalStore.getState>

export type AppDispatch = typeof globalStore.dispatch