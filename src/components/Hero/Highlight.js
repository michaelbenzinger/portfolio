import React, { useState } from 'react';
import Media from 'react-media';
import styled from 'styled-components';
import * as colors from '../../util/colors';
import { createClamp, createFontRules } from '../../util/functions';
import { letterSpacingS, letterSpacingL, transitionAll } from '../../util/constants';

const HighlightWrapper = styled.button`
    box-sizing: border-box;
    position: relative;
    background: ${({theme}) => theme == 'light' ? colors.grayL3 : colors.grayD3};
    border: none;
    text-align: left;
    display: block;
    border-radius: 0 16px;
    padding: ${createClamp(30, 40)} ${createClamp(15, 30)};
    ${createFontRules(18, 24, 27, 32)};
    font-family: Inter, sans-serif;
    overflow: hidden;
    ${transitionAll};

    &::after {
        position: absolute;
        right: ${createClamp(20, 30)};
        top: ${createClamp(20, 30)};
        margin-top: 0.2em;
        margin-right: 0.1em;
        content: '';
        width: 0.5em;
        height: 0.5em;
        border-right: 2px solid ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayL2};
        border-bottom: 2px solid ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayL2};
        transform: ${({open}) => open
            ? 'rotate(45deg) scale(-1) translate(-0.2em, -0.2em)'
            : 'rotate(45deg) scale(1)'};
        opacity: 0;
        ${transitionAll};
    }

    @media (max-width: ${({bp}) => bp}px) {
        height: ${({open}) => open ? 'auto' : '3.4em'};
        padding: 24px ${createClamp(15, 30)};
        cursor: pointer;

        @media (hover: hover) {
            &:hover {
                background: ${colors.grayM2}44;
            }
        }

        &::after {
            opacity: 1;
        }
    }

`;

const HighlightTitle = styled.span`
    ${letterSpacingS};
    font-weight: 700;
    color: ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayL1};
    display: block;
    margin-bottom: 0.4em;

    @media (max-width: ${({bp}) => bp}px) {
        br {
            display: none;
        }
    }
`;

const HighlightText = styled.span`
    ${createFontRules(15, 18, 17, 25)};
    ${letterSpacingL};
    font-weight: 400;
    display: block;
    margin-bottom: 0.4em;
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL2};
    ${transitionAll};

    @media (max-width: ${({bp}) => bp}px) {
        ${({open}) => !open && `
            transform: translateY(0.5em);
            opacity: 0;
        `}
    }
`

const Highlight = ({ title, text, bp, theme }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => { setOpen(!open); }

    return (
        <Media queries={{ small: `(max-width: ${bp}px)`}}>
            {matches => {
                const conditionalProps = matches.small
                    ? { onClick: toggle, }
                    : { as: 'div', };
                return (
                <>
                    <HighlightWrapper {...conditionalProps} theme={theme} open={open} bp={bp}>
                        <HighlightTitle theme={theme} bp={bp} dangerouslySetInnerHTML={{__html: title}}/>
                        <HighlightText theme={theme} open={open} bp={bp}>{text}</HighlightText>
                    </HighlightWrapper>
                </>
            )}}
        </Media>
    )
}

export default Highlight;
