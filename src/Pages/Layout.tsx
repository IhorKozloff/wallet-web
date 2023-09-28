import { Outlet } from 'react-router-dom';
import { Section, Container, Header, LayoutComponentsBar } from 'components';
import Media from 'react-media';
import React from 'react';

export const Layout = () => {
    
    return (
        <>
            <Section className="section header-section">
                <Header/>
            </Section>
            
            <main className="main"> 
                <Media query="(max-width: 1279px)" render={() =>
                    (
                        <>
                            <Section className="section layout-section">
                                <Container className="container layout-container">   
                                    <LayoutComponentsBar/>
                                </Container>
                            </Section>

                            <Outlet/>
                        </>
                    )}
                />

                <Media query="(min-width: 1280px)" render={() =>
                    (
                        <>
     
                            <LayoutComponentsBar/>
                            <Outlet/>


                        </>
                    )}
                />
            </main>

            <footer></footer>
        </>
    );
};