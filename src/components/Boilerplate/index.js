import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../layouts/DefaultLayout';
import { Section } from '../../layouts/LayoutComponents';
import { createClamp, createFontRules } from '../../util/functions';
import { letterSpacingS } from '../../util/constants';
import * as colors from '../../util/colors';

const paddingSm = 40;
const paddingLg = 80;

const innerStyles = `
    padding-top: ${createClamp(paddingSm, paddingLg)};
    padding-bottom: ${createClamp(0, 0)};
`;

const About = () => {
    const theme = useContext(ThemeContext);

    const outerStyles = `
        background: ${theme == 'light' ? colors.grayL2 : colors.grayD2};
    `

    return (
        <Section
            innerStyles={innerStyles}
            outerStyles={outerStyles}
        >
            
        </Section>
    )
}

export default About;