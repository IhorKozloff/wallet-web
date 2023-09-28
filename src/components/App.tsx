import { Routes, Route } from 'react-router-dom';
import { Layout, HomePage, StatisticPage, RegisterPage, LoginPage, ExchangeRatesPage } from 'Pages';

import PublickRoute from 'routes/public';
import PrivateRoute from 'routes/private';
import React from 'react';

export const App = (): JSX.Element => {

    return (

        <Routes>
            <Route path="/" element={<PrivateRoute><Layout/></PrivateRoute>}>
                <Route index element={<HomePage/>}/>
                <Route path="statistic" element={<StatisticPage/>}/>
                {/* <Route path="exchange-rates" element={<ExchangeRatesPage/>}/> */}

            </Route>

            <Route path="register" element={<PublickRoute><RegisterPage/></PublickRoute>}/>
            <Route path="login" element={<PublickRoute><LoginPage/></PublickRoute>}/>

        </Routes>
    );
};
