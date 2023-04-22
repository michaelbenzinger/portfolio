import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../layouts/DefaultLayout';
import { Section } from '../../layouts/LayoutComponents';
import { createClamp, createFontRules } from '../../util/functions';
import { letterSpacingS } from '../../util/constants';
import * as colors from '../../util/colors';
import { bp } from '../Hero';
import Project from './Project';
import { StaticImage } from 'gatsby-plugin-image';
import AnchorTarget from '../AnchorTarget';

const paddingSm = 60;
const paddingLg = 120;

const innerStyles = `
    padding-top: ${createClamp(paddingSm, paddingLg)};
    padding-bottom: ${createClamp(paddingSm * 0.5, paddingLg * 0.5)};
`;

const Title1 = styled.span`
    ${createFontRules(23, 30, 30, 39)};
    ${letterSpacingS};
    font-weight: 700;
    display: block;
    margin-bottom: 0.5em;
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL2};
`;

const ProjectsFlex = styled.div`
    margin: 0 ${createClamp(-30, -15)};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${createClamp(15, 30)};

    @media (max-width: ${bp}px) {
        grid-template-columns: 1fr;
    }
`;

const Work = () => {
    const theme = useContext(ThemeContext);

    const outerStyles = `
        background: ${theme == 'light' ? colors.grayL2 : colors.black1};
    `

    return (
        <Section
            innerStyles={innerStyles}
            outerStyles={outerStyles}
        >
            <AnchorTarget id='sec-work' />
            <Title1 theme={theme}>Recent work</Title1>
            <ProjectsFlex>
                <Project theme={theme} bp={bp} title='keytrudahcp.com' text1={`
                    <p>React</p>
                    <p>Gatsby</p>
                    <p>styled-components</p>
                `} text2={`
                    <p>Role: Primary developer</p>
                `} img={() => <StaticImage alt='' src='../../images/keytrudahcp.jpg'/>}
                    href="https://keytrudahcp.com"    
                />
                <Project theme={theme} bp={bp} title='keytruda.com' text1={`
                    <p>Handlebars</p>
                    <p>JavaScript</p>
                    <p>Sass</p>
                `} text2={`
                    <p>Role: Development support</p>
                `} img={() => <StaticImage alt='' src='../../images/keytruda.jpg'/>}
                    href="https://keytruda.com"
                />
                <Project theme={theme} bp={bp} title='keytrudalenvima.com' text1={`
                    <p>Handlebars</p>
                    <p>JavaScript</p>
                    <p>Sass</p>
                `} text2={`
                    <p>Role: Development support</p>
                `} img={() => <StaticImage alt='' src='../../images/keytrudalenvima.jpg'/>}
                    href="https://keytrudalenvima.com"
                />
            </ProjectsFlex>
        </Section>
    )
}

export default Work;