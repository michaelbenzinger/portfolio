import React, { createContext, useRef, useState } from 'react';
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

// const ColorProvider = styled.div`
//     ${props => props.theme == 'light'
//         ? lightThemeBase
//         : darkThemeBase
//     }
// `;

export const ThemeContext = createContext(null);

const DefaultLayout = ({ children }) => {
    const [theme, _setTheme] = useState(() => {
        let _state = '';
        const themePref = {};
        // Check system theme preference
        if (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themePref.system = 'dark';
        } else {
            themePref.system = 'light';
        }

        // Set state variable, trying session theme first then system theme
        if (
            typeof window !== "undefined" && window.sessionStorage.getItem('mbc-theme-pref') &&
            JSON.parse(window.sessionStorage.getItem('mbc-theme-pref')).session
        ) {
            _state = JSON.parse(window.sessionStorage.getItem('mbc-theme-pref')).session
            themePref.session = _state;
        } else {
            _state = themePref.system;
        }

        // Set system theme preference to sessionStorage if it's not there or if it isn't matching already
        if (
            typeof window !== "undefined" && !window.sessionStorage.getItem('mbc-theme-pref') ||
            typeof window !== "undefined" && JSON.parse(window.sessionStorage.getItem('mbc-theme-pref')).system != themePref.system
        ) {
            window.sessionStorage.setItem('mbc-theme-pref', JSON.stringify(themePref));
        }

        // Return theme preference as initial state
        return _state;
    });
    const themeRef = useRef(theme);

    const setTheme = update => {
        themeRef.current = update;
        _setTheme(update);

        let themePref = {};
        if (typeof window !== "undefined" && window.sessionStorage.getItem('mbc-theme-pref')) {
            themePref = JSON.parse(window.sessionStorage.getItem('mbc-theme-pref'));
        }
        themePref.session = update;
        window.sessionStorage.setItem('mbc-theme-pref', JSON.stringify(themePref));
    }

    const toggleTheme = () => {
        if (themeRef.current == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            {/* <ColorProvider theme={theme}> */}
                <NormalizeGlobalStyle />
                <GlobalStyle />
                <GoogleReCaptchaProvider reCaptchaKey="6Lej7oklAAAAALhW3CZh1nZhaWlAki5acBG0z08l">
                    <Navigation toggleTheme={toggleTheme} />
                    <StyledMain theme={theme}>{children}</StyledMain>
                    <Footer theme={theme} />
                </GoogleReCaptchaProvider>
            {/* </ColorProvider> */}
        </ThemeContext.Provider>
    );
};

export default DefaultLayout;
