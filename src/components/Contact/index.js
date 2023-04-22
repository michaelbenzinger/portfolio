import React, { useContext } from 'react';
import styled from 'styled-components';
import { Section, TwoColumnFlex } from '../../layouts/LayoutComponents';
import { createClamp, createFontRules } from '../../util/functions';
import * as colors from '../../util/colors';
import Form from './Form';
import { ThemeContext } from '../../layouts/DefaultLayout';
import { letterSpacingS, maxWidth, sidePadding, transitionAll } from '../../util/constants';
import { bp } from '../Hero';

const paddingSm = 60;
const paddingLg = 120;

const innerStyles = `
    position: relative;
    padding-top: ${createClamp(paddingSm, paddingLg)};
    padding-bottom: ${createClamp(paddingSm, paddingLg)};
    z-index: 1;

    @media (max-width: ${bp}px) {
        padding-left: 0;
        padding-right: 0;
        padding-bottom: ${createClamp(paddingSm * 0.5, paddingLg)};
    }
`;

const AnchorTarget = styled.div`
    visibility: hidden;
    height: 1px;
    width: 1px;
    transform: translateY(-100px);
`;

const FormWrapper = styled.div`
    margin: 0 ${createClamp(-30, -15)};
    background: ${({theme}) => theme == 'light' ? colors.white : colors.blueD2};
    border-radius: 16px;
    ${transitionAll};

    @media (max-width: ${bp}px) {
        margin: 0;
        border-radius: 0;
    }
`;

const FormContent = styled.div`
    padding: ${createClamp(60, 120)} 20px;
    margin: 0 auto;
    max-width: 800px;
    background: ${({theme}) => theme == 'light' ? colors.white : colors.blueD2};
    border-radius: 16px;
    ${transitionAll};

    @media (max-width: ${bp}px) {
        padding: ${createClamp(60, 120)} ${sidePadding};
        border-radius: 0;
    }
`;

const Title = styled.span`
    ${createFontRules(23, 30, 30, 39)};
    ${letterSpacingS};
    text-align: center;
    font-weight: 700;
    display: block;
    margin-bottom: ${createClamp(25, 30)};
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL2};
`;

const Contact = () => {
    const theme = useContext(ThemeContext);

    const outerStyles = `
        position: relative;
        background: ${theme == 'light' ? colors.grayL2 : colors.black1};

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 30%;
            bottom: 0;
            left: 0;
            background: ${theme == 'light' ? colors.grayL1 : colors.grayD3};
            ${transitionAll};
        }
    `;
    return (
        <Section innerStyles={innerStyles} outerStyles={outerStyles}>
            <FormWrapper theme={theme}>
                <FormContent theme={theme}>
                    <AnchorTarget id='sec-contact'/>
                    <Title theme={theme} as='h2'>Get in touch</Title>
                    <Form theme={theme} />
                </FormContent>
            </FormWrapper>
        </Section>
    )
}

export default Contact;