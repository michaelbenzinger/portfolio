import React, { useContext } from 'react';
import styled from 'styled-components';
import { Section, TwoColumnFlex } from '../../layouts/LayoutComponents';
import { createClamp, createFontRules } from '../../util/functions';
import * as colors from '../../util/colors';
import { ThemeContext } from '../../layouts/DefaultLayout';
import { letterSpacingM, letterSpacingS } from '../../util/constants';

import * as tech from './technologies';
import AnchorTarget from '../AnchorTarget';

const paddingSm = 40;
const paddingLg = 90;

const innerStyles = `
    padding-top: ${createClamp(paddingSm, paddingLg)};
    padding-bottom: ${createClamp(paddingSm, paddingLg)};
    text-align: center;
`;

const Title = styled.span`
    ${createFontRules(23, 30, 30, 39)};
    ${letterSpacingS};
    font-weight: 700;
    display: block;
    margin-bottom: 0.5em;
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL2};
`;

const TechList = styled.ul`
    display: inline-block;
    padding: 1em 0;
    max-width: 1000px;
    margin: 0 -30px;
`;

const TechCapsule = styled.li`
    ${createFontRules(13, 15, 19, 21)};
    display: inline-flex;
    align-items: center;
    padding: ${createClamp(8, 13)} ${createClamp(10, 26)};
    margin: 0 ${createClamp(4, 10)} 1.25em;
    border-radius: 100px;
    background: ${({theme}) => theme == 'light' ? colors.white : colors.grayD3};
    filter: drop-shadow(0px 3px 10px ${colors.blueD1}10);
`;

const SvgWrapper = styled.div`
    height: 1.15em;
    width: 1.15em;
    margin-right: 0.5em;

    & > * {
        width: 100%;
        height: 100%;
    }
`;

const TechName = styled.span`
    ${letterSpacingM};
    font-weight: 500;
    color: ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayL2};
`;

const Technology = ({ name, svg }) => {
    const theme = useContext(ThemeContext);

    return (
        <TechCapsule theme={theme}>
            <SvgWrapper name={name} dangerouslySetInnerHTML={{__html: svg}}></SvgWrapper>
            <TechName theme={theme}>{name}</TechName>
        </TechCapsule>
    )
}

const Hero = () => {
    const theme = useContext(ThemeContext);

    const outerStyles = `
        background: ${theme == 'light' ? colors.grayL2 : colors.black1};
    `

    return (
        <Section
            innerStyles={innerStyles}
            outerStyles={outerStyles}
        >
            <AnchorTarget id='sec-skills' />
            <Title theme={theme} as='h2'>Skills & Technologies</Title>
            <TechList>
                <Technology name="React" svg={tech.react} />
                <Technology name="JavaScript" svg={tech.javascript} />
                <Technology name="CSS3" svg={tech.css} />
                <Technology name="Git" svg={tech.git} />
                <Technology name="Ruby" svg={tech.ruby} />
                <Technology name="HTML5" svg={tech.html} />
                <Technology name="Gatsby" svg={tech.gatsby} />
                <Technology name="styled-components" svg={tech.styled} />
                <Technology name="Node" svg={tech.node} />
                <Technology name="Storybook" svg={tech.storybook} />
                <Technology name="Rails" svg={tech.rails} />
                <Technology name="Sass" svg={tech.sass} />
                <Technology name="Jest" svg={tech.jest} />
                <Technology name="Redux" svg={tech.redux} />
                <Technology name="Handlebars" svg={tech.handlebars} />
                <Technology name="NextJS" svg={tech.next} />
                <Technology name="Python" svg={tech.python} />
            </TechList>
        </Section>
    )
}

export default Hero;