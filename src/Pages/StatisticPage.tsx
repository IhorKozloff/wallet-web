import {Container, Section, DiagramTab} from 'components';
import { fetchCategories } from 'redux/operations';

import { useAppSelector, useAppDispatch } from 'hooks/useSelectorAndDispatch';
import { useEffect } from 'react';
import React from 'react';

export const StatisticPage = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector(state => state.userStatus.user);
   
    useEffect(() => {
        dispatch(fetchCategories({token}));
    },[dispatch, token]);

    return (
        <Section className="statistic-section" style={{paddingTop: '46px', paddingLeft: '69px'}}>
            <Container className="container statistic-container">
                <h2>Statistic Page</h2>
                <DiagramTab/>
              
            </Container>
        </Section>
    );
};