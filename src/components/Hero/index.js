import React, { useContext } from 'react';
import styled from 'styled-components';
import { Section } from '../../layouts/LayoutComponents';
import { createClamp, createFontRules } from '../../util/functions';
import * as colors from '../../util/colors';
import { ThemeContext } from '../../layouts/DefaultLayout';
import { letterSpacingM, letterSpacingS, transitionAll } from '../../util/constants';
import Highlight from './Highlight';

export const bp = 700;
export const heroBgLight = colors.grayL1;
export const heroBgDark = colors.blueD3;
const paddingSm = 70;
const paddingLg = 150;

const innerStyles = `
    padding-top: ${createClamp(paddingSm, paddingLg)};
    padding-bottom: ${createClamp(0, 0)};
`;

const Content = styled.div`
    max-width: 42rem;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.span`
    ${createFontRules(26, 30, 36, 44)};
    ${letterSpacingS};
    font-weight: 700;
    display: block;
    margin-bottom: 0.3em;
    color: ${({theme}) => theme == 'light' ? colors.black2 : colors.grayL1};
`;

const Subtitle = styled.span`
    ${createFontRules(15, 23, 22, 28)};
    ${letterSpacingM};
    max-width: 45ch;
    margin: 0 auto;
    font-weight: 400;
    display: block;
    margin-bottom: 1em;
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL2};
`;

const CTA = styled.a`
    ${createFontRules(14, 15, 20, 22)};
    ${letterSpacingM};
    font-weight: 500;
    color: ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayM2};
    cursor: pointer;
`;

const Highlights = styled.div`
    margin: ${createClamp(paddingSm, paddingLg)}
        ${createClamp(-30, -15)}
        0
        ${createClamp(-30, -15)};
`;

const HighlightsHeading = styled.div`
    ${createFontRules(15, 17, 20, 20)};
    ${letterSpacingM};
    font-weight: 700;
    color: ${({theme}) => theme == 'light' ? colors.grayM2 : colors.grayL3};
    padding: 0 ${createClamp(15, 30)};
    margin-bottom: 1em;
`;

const HighlightsFlex = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${createClamp(15, 30)};

    @media (max-width: ${bp}px) {
        grid-template-columns: 1fr;
    }
`;

const CircleDivider = styled.div`
    position: relative;
    height: ${createClamp(60, 160)};
    width: 100%;
    background: ${({theme}) => theme == 'light' ? colors.grayL2 : colors.black1};
    overflow: hidden;
    ${transitionAll};
`;

const Circle = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 500vw;
    width: 500vw;
    background: ${({theme}) => theme == 'light' ? colors.grayL1 : colors.blueD3};
    border-radius: 50%;
    ${transitionAll};
`;

const Hero = () => {
    const theme = useContext(ThemeContext);

    const outerStyles = `
        background: ${theme == 'light' ? heroBgLight : heroBgDark};
    `

    return (
        <>
            <Section
                innerStyles={innerStyles}
                outerStyles={outerStyles}
            >
                <Content as='h1'>
                    <Title theme={theme}>Michael Benzinger</Title>
                    <Subtitle theme={theme}>A Frontend Developer building clean and powerful solutions and making the web more beautiful</Subtitle>
                    <CTA theme={theme} href="#sec-contact">Send me a message</CTA>
                </Content>
                <Highlights>
                    <HighlightsHeading theme={theme}>A couple of things I get excited about:</HighlightsHeading>
                    <HighlightsFlex>
                        <Highlight theme={theme} title="Utilizing Design<br/> Systems" text="I believe in leveraging design systems to achieve consistency and scalability across a product." bp={bp}/>
                        <Highlight theme={theme} title="Fully Responsive<br/> Development" text="I believe the web shines when we build fully responsive designs for every screen size." bp={bp}/>
                        <Highlight theme={theme} title="Robust React<br/> Components" text="I believe in expediting development by building powerful components and systems." bp={bp}/>
                    </HighlightsFlex>
                </Highlights>
            </Section>
            <CircleDivider theme={theme}>
                <Circle theme={theme}/>
            </CircleDivider>
        </>
    )
}

export default Hero;