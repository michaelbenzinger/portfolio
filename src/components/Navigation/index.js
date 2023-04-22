import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { letterSpacingM, maxWidth, sidePadding, transitionAll } from '../../util/constants';
import { createClamp, createFontRules, throttle } from '../../util/functions';
import { ThemeContext } from '../../layouts/DefaultLayout';
import * as colors from '../../util/colors';

const expandedHeight = 80;
const collapsedHeight = 55;
const shrinkBreakpoint = 540;
const logoSizeSm = 24;
const logoSizeLg = 28;

const NavContainer = styled.nav`
    --logo-size: ${logoSizeSm}px;
    @media (min-width: ${shrinkBreakpoint}px) {
        ${props => !props.shrinkNav && `--logo-size: ${logoSizeLg}px;`}
    }
    z-index: 2;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${({theme}) => theme == 'light' ? colors.grayL2 : colors.blueD3};
    ${transitionAll};

    height: ${collapsedHeight}px;
    @media (min-width: ${shrinkBreakpoint}px) {
        ${props => !props.shrinkNav && `height: ${expandedHeight}px;`}
    }
`;

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: min(100%, ${maxWidth}px);
    height: 100%;
    padding: 0 ${sidePadding};
`;

const NavArea = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL1};
`;

const StyledLink = styled.a`
    ${createFontRules(13, 15, 16, 16)};
    ${letterSpacingM};
    font-weight: 500;
    margin-right: ${createClamp(16, 60)};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const DarkToggleWrapper = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    padding: ${createClamp(5, 8)};

    &:hover {
        svg {
            color: ${({theme}) => theme == 'light' ? colors.grayM2 : colors.grayM1};
        }
    }
`;

const DarkToggle = styled.div`
    --_size-mod: 1;
    --_width-mod: 1.5;
    --_slider-width: calc(var(--logo-size) * var(--_width-mod) * var(--_size-mod));
    position:relative;
    width: var(--_slider-width);
    height: calc(var(--logo-size) * var(--_size-mod));
    border-radius: 1000px;
    border: 1px solid ${({theme}) => theme == 'light' ? colors.grayD2 : colors.grayL2};
    transition: background-color 0.3s, padding 0.3s, margin 0.3s, width 0.3s, height 0.3s;
`;

const DarkToggleSlider = styled.div`
    box-sizing: border-box;
    --_slider-size-mod: 0.8;
    --_slider-size: calc(var(--logo-size) * var(--_size-mod) * var(--_slider-size-mod));
    --_slider-padding: calc(var(--logo-size) * var(--_size-mod) * (1 - var(--_slider-size-mod)) / 2);
    position: absolute;
    width: var(--_slider-size);
    height: var(--_slider-size);
    top: var(--_slider-padding);
    left: var(--_slider-padding);
    border: 1px solid ${({theme}) => theme == 'light' ? colors.grayD2 : colors.grayL2};
    border-radius: 50%;
    transition: padding 0.3s, margin 0.3s, width 0.3s, height 0.3s, top 0.3s, left 0.3s;
    ${props => props.theme == 'dark' && `
        left: calc(var(--_slider-width) - var(--_slider-padding) - var(--_slider-size))
    `}
`;

const DarkToggleIcon = styled.svg`
    --_icon-size: 80%;
    position: absolute;
    inset: 0;
    margin: auto;
    width: var(--_icon-size);
    height: var(--_icon-size);
    opacity: 1;
    transition: color 0.3s, opacity 0.3s;
`;

const DarkToggleMoon = styled(DarkToggleIcon)`
    ${props => props.theme == 'light' && 'opacity: 0;'}
    color: ${colors.grayL3};
`;

const DarkToggleSun = styled(DarkToggleIcon)`
    ${props => props.theme == 'dark' && 'opacity: 0;'}
    color: ${colors.grayD2};
`;

const Navigation = ({ toggleTheme }) => {
    const [shrinkNav, setShrinkNav] = useState(false);
    const [prevScroll, _setPrevScroll] = useState(0);
    const prevScrollRef = useRef(prevScroll);
    const theme = useContext(ThemeContext);

    const setPrevScroll = update => {
        prevScrollRef.current = update;
        _setPrevScroll(update);
    }

    const checkScroll = () => {
        if (window.scrollY > prevScrollRef.current) {
            setShrinkNav(true)
        } else if (window.scrollY < prevScrollRef.current) {
            setShrinkNav(false);
        }
        setPrevScroll(window.scrollY);
    };

    const throttledCheckScroll = throttle(checkScroll, 50);
    let timer = null;
    const handleScroll = () => {
        throttledCheckScroll();
        if (timer != null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(() => {
            checkScroll();
        }, 50)
    }

    useEffect(() => {
        checkScroll();

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <NavContainer theme={theme} shrinkNav={shrinkNav}>
            <NavWrapper>
                <NavArea theme={theme} shrinkNav={shrinkNav}>
                    <StyledLink href="#sec-skills">Skills</StyledLink>
                    <StyledLink href="#sec-about">About</StyledLink>
                    <StyledLink href="#sec-work">Work</StyledLink>
                    <StyledLink href="#sec-contact">Contact</StyledLink>
                </NavArea>
                <NavArea shrinkNav={shrinkNav}>
                    <DarkToggleWrapper theme={theme} onClick={toggleTheme} shrinkNav={shrinkNav}>
                        <DarkToggle theme={theme} shrinkNav={shrinkNav}>
                            <DarkToggleSlider theme={theme}>
                                <DarkToggleMoon theme={theme} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></DarkToggleMoon>
                                <DarkToggleSun theme={theme} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun"><circle fill="currentColor" stroke="none" cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></DarkToggleSun>
                            </DarkToggleSlider>
                        </DarkToggle>
                    </DarkToggleWrapper>
                </NavArea>
            </NavWrapper>
        </NavContainer>
    )
}

export default Navigation;