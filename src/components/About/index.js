import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../layouts/DefaultLayout';
import { Section } from '../../layouts/LayoutComponents';
import { createClamp, createFontRules } from '../../util/functions';
import { letterSpacingL, letterSpacingM, letterSpacingS } from '../../util/constants';
import * as colors from '../../util/colors';
import AnchorTarget from '../AnchorTarget';

const paddingSm = 10;
const paddingLg = 30;

const innerStyles = `
    padding-top: ${createClamp(paddingSm, paddingLg)};
    padding-bottom: ${createClamp(paddingSm, paddingLg)};
`;

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 48px;
    row-gap: 32px;
`;

const AboutColumn = styled.div`
    flex: 2.2 1 325px;
`;

const HistoryColumn = styled.div`
    flex: 2 1 275px;
`;

const Title1 = styled.span`
    ${createFontRules(23, 30, 30, 39)};
    ${letterSpacingS};
    font-weight: 700;
    display: block;
    margin-bottom: 0.5em;
    color: ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayL2};
`;

const AboutBody = styled.div`
    p {
        ${createFontRules(14, 18, 16, 22)};
        ${letterSpacingL};
        font-weight: 400;
        color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL3};

        &:not(:last-child) {
            margin-bottom: 0.75em;
        }
    }
`;

const Title2 = styled.span`
    ${createFontRules(20, 24, 24, 30)};
    ${letterSpacingS};
    font-weight: 700;
    display: block;
    color: ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayL2};
    margin-bottom: 0.5em;

    &:not(:first-child) {
        margin-top: 1.25em;
    }
`;

const Title3 = styled.span`
    ${createFontRules(20, 24, 24, 30)};
    ${letterSpacingS};
    font-weight: 400;
    display: block;
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL3};
    margin: 0.3em 0 0.2em;
`;

const Detail = styled.span`
    ${createFontRules(13, 19, 15, 22)};
    ${letterSpacingM};
    font-weight: 400;
    display: block;
    margin-bottom: 0.7em;
    color: ${({theme}) => theme == 'light' ? colors.grayD1 : colors.grayM2};
`;

const About = () => {
    const theme = useContext(ThemeContext);

    const outerStyles = `
        background: ${theme == 'light' ? colors.grayL2 : colors.black1};
    `

    return (
        <Section
            innerStyles={innerStyles}
            outerStyles={outerStyles}
        >
            <Flex>
                <AboutColumn>
                    <AnchorTarget id='sec-about' />
                    <Title1 theme={theme} as='h2'>About me</Title1>
                    <AboutBody theme={theme}>
                        <p>I am a passionate web developer dedicated to growing in my craft and providing value to my team. I constantly look for opportunities to challenge myself, clean up code, and improve processes.</p>
                        <p>While my love for software development started at a young age, I initially pursued a career in music, studying film and video game scoring and working for several years leading teams as a music director. Composing a score and building an app are remarkably similar — both disciplines combine technical skills and creative spark to build a system out of smaller parts.</p>
                        <p>I began exploring web development and design in 2020, designing brands and websites for small businesses and organizations. At the same time, I started to get serious about web development, following The Odin Project, an open-source curriculum that teaches full-stack JavaScript development in a hands-on way.</p>
                        <p>By the end of 2021, I had an established portfolio of work and joined Designory, where I currently work building powerful web experiences for a handful of clients.</p>
                    </AboutBody>
                </AboutColumn>
                <HistoryColumn>
                    <Title2 theme={theme} as='h3'>Work history</Title2>
                    <Title3 theme={theme} as='h4'>Engineer I (2023 – Current)</Title3>
                    <Title3 theme={theme} as='h4'>Jr. Engineer II (2021 – 2023)</Title3>
                    <Detail theme={theme} as='p'>Designory, 2021 – Current</Detail>
                    <Title3 theme={theme} as='h4'>Graphic Designer/Web Developer</Title3>
                    <Detail theme={theme} as='p'>Freelance, 2020 – 2022</Detail>
                    <Title3 theme={theme} as='h4'>Music Director</Title3>
                    <Detail theme={theme} as='p'>Lord of Glory Lutheran Church, 2016 – 2020</Detail>

                    <Title2 theme={theme} as='h3'>Education</Title2>
                    <Title3 theme={theme} as='h4'>Berklee College of Music</Title3>
                    <Detail theme={theme} as='p'>Bachelor of Music in Film Scoring, 2016 Summa Cum Laude</Detail>
                    <Title3 theme={theme} as='h4'>The Odin Project</Title3>
                    <Detail theme={theme} as='p'>Full-Stack Web Development Curriculum, JavaScript Track</Detail>
                </HistoryColumn>
            </Flex>
        </Section>
    )
}

export default About;