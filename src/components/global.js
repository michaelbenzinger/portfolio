import React from 'react';
import { createGlobalStyle } from 'styled-components';
import * as colors from '../util/colors';

export const NormalizeGlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .grecaptcha-badge {
        visibility: hidden;
    }

    a:hover {
        text-decoration: underline;
    }

    ::selection {
        background: ${colors.blueC2}88;
    }
    ::-moz-selection {
        background: ${colors.blueC2}88;
    }
`;

export const HeadWrapper = ({ children }) => (
    <>
        <html lang="en"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;700;900&display=swap" rel="stylesheet"/> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/> */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        {children}
        <script dangerouslySetInnerHTML={{__html: `
            function submitForm(token) {
                console.log('submitting form');
                document.getElementById("contact-form").dispatchEvent(new Event('submit', {
                    'bubbles'    : true, // Whether the event will bubble up through the DOM or not
                    'cancelable' : true  // Whether the event may be canceled or not
                }));
            }
        `}}/>
    </>
)