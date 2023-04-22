import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '../../util/colors';
import { createClamp, createFontRules } from '../../util/functions';
import { letterSpacingS, letterSpacingL, transitionAll } from '../../util/constants';

const ProjectWrapper = styled.a`
    display: block;
    position: relative;
    background: ${({theme}) => theme == 'light' ? colors.white : colors.grayD3};
    border-radius: 0 16px;
    padding: ${createClamp(20, 40)} ${createClamp(15, 30)};
    ${createFontRules(10, 20, 25, 32)};
    overflow: hidden;
    filter: drop-shadow(0px 3px 10px ${colors.blueD1}0A);
    ${transitionAll};

    &:hover {
        text-decoration: none;
        background: ${({theme}) => theme == 'light' ? `${colors.grayM1}44` : `${colors.grayM2}44`};

        & > *:first-child {
            text-decoration: underline;
        }
    }
`;

const ProjectTitle = styled.span`
    ${letterSpacingS};
    font-weight: 700;
    color: ${({theme}) => theme == 'light' ? colors.blueD1 : colors.grayL1};
    display: block;
    margin-bottom: 0.3em;

    @media (max-width: ${({bp}) => bp}px) {
        ${createFontRules(20, 24, 27, 32)};
        br {
            display: none;
        }
    }
`;

const ProjectText = styled.span`
    ${createFontRules(13, 17, 15, 20)};
    ${letterSpacingL};
    font-weight: 400;
    display: block;
    margin-bottom: 0.5em;
    color: ${({theme}) => theme == 'light' ? colors.grayD1 : colors.grayL3};
`;

const Image = styled.div`
    margin: 12px 0 16px;
    width: 100%;
    aspect-ratio: 2 / 1;
    max-height: 175px;
    overflow: hidden;
`;

const Project = ({ title, text1, text2, img, href, bp, theme }) => {
    return (
        <ProjectWrapper theme={theme} bp={bp} href={href} target='_blank' rel='noreferrer noopener'>
            <ProjectTitle theme={theme} bp={bp} dangerouslySetInnerHTML={{__html: title}}/>
            <ProjectText theme={theme} bp={bp} dangerouslySetInnerHTML={{__html: text1}}/>
            <Image>
                {img && img()}
            </Image>
            <ProjectText theme={theme} bp={bp} dangerouslySetInnerHTML={{__html: text2}}/>
        </ProjectWrapper>
    )
}

export default Project;
