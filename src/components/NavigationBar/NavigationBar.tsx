import { IconSVG } from 'helpers/IconSvg';
import { NavigationBarWrapper, NavigationList,  NavigationItem, NavigationButton, StyledLink} from './NavigationBar.styled';
import Media from 'react-media';
import React from 'react';

export const NavigationBar = () => {

    return (
        
        <NavigationBarWrapper className="navigation">
            <NavigationList className="navigation__list nav-list">

                <NavigationItem className="nav-list__item">
                    <StyledLink to="/">
                        <NavigationButton className="nav-list__button">
                            <IconSVG id="home-btn-icon"></IconSVG>
                        </NavigationButton>
                        <Media query="(min-width: 768px)" render={() =>
                            
                            (
                                <span>Home</span>
                            )}
                        />
                    </StyledLink>
                </NavigationItem>

                <NavigationItem className="nav-list__item">
                    <StyledLink to="statistic">
                        <NavigationButton className="nav-list__button">
                            <IconSVG id="statistic-btn-icon"></IconSVG>
                        </NavigationButton>

                        <Media query="(min-width: 768px)" render={() =>
                            
                            (
                                <span>Statistic</span>
                            )}
                        />    
                    </StyledLink>
                </NavigationItem>

                <Media query="(max-width: 767px)" render={() =>
                    (
                        <NavigationItem className="nav-list__item">
                            <StyledLink to="exchange-rates">
                                <NavigationButton className="nav-list__button">
                                    <IconSVG id="money-btn-icon"></IconSVG>
                                </NavigationButton>
                            </StyledLink>
                        </NavigationItem>
                    )}
                />

            </NavigationList>
        </NavigationBarWrapper>
    );
};
