import React, { createContext, useRef, useState, useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { GlobalStyle, NormalizeGlobalStyle } from '../components/global';
import { Footer, Navigation } from '../components';
import styled from 'styled-components';
import { expandedHeight } from '../components/Navigation';
import { heroBgDark, heroBgLight } from '../components/Hero';
import { transitionAll } from '../util/constants';

const StyledMain = styled.main`
    z-index: 1;
    padding-top: ${expandedHeight || 80}px;
    background-color: ${({theme}) => theme == 'light' ? heroBgLight : heroBgDark};
    ${transitionAll};
`;

export const ThemeContext = createContext(null);

const DefaultLayout = ({ children }) => {
    const [theme, _setTheme] = useState('light');
    const themeRef = useRef(theme);

    const setTheme = update => {
        themeRef.current = update;
        _setTheme(update);
    };

    useEffect(() => {
        if (window.sessionStorage.getItem('mbc-session-pref')) {
            setTheme(window.sessionStorage.getItem('mbc-session-pref'));
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        // Otherwise, we'll use the default 'light' theme
    }, []);

    const updateSessionPreference = update => {
        window.sessionStorage.setItem('mbc-session-pref', update);
    };

    const toggleTheme = () => {
        if (themeRef.current == 'light') {
            setTheme('dark');
            updateSessionPreference('dark');
        } else {
            setTheme('light');
            updateSessionPreference('light');
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            <NormalizeGlobalStyle />
            <GlobalStyle />
            <GoogleReCaptchaProvider reCaptchaKey="6Lej7oklAAAAALhW3CZh1nZhaWlAki5acBG0z08l">
                <Navigation toggleTheme={toggleTheme} />
                <StyledMain theme={theme}>{children}</StyledMain>
                <Footer theme={theme} />
            </GoogleReCaptchaProvider>
        </ThemeContext.Provider>
    );
};

export default DefaultLayout;
