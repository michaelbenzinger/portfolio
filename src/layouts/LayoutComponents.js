import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { maxWidth, sidePadding, transitionAll } from '../util/constants';
import { throttle } from '../util/functions';

const transitionDuration = '0.8s';

export const OuterWrapper = styled.section`
    ${transitionAll};
    ${({outerStyles}) => outerStyles}
`;

export const InnerWrapper = styled.div`
    max-width: ${maxWidth}px;
    padding: ${props => props.verticalPadding || 0}px ${sidePadding};
    margin: 0 auto;
    ${({innerStyles}) => innerStyles}
`;

const SectionContent = styled.div`
    width: 100%;
    ${props => props.visible
        ? `
            @media (prefers-reduced-motion: no-preference) {
                opacity: 1;
                transition: opacity 1s, transform ${transitionDuration};
                transform: translate(0);
            }
        `
        : `
            @media (prefers-reduced-motion: no-preference) {
                transition: opacity 1s, transform ${transitionDuration};
                transform: translate(0, 15px);
                opacity: 0;
            }
        `
    }
`;

export const Section = ({ children, outerStyles, innerStyles, verticalPadding }) => {
    const [visible, setVisible] = useState(false);
    const wrapperRef = useRef(null);

    const isElementXPercentInViewport = (el, percentVisible) => {
        let
          rect = el.getBoundingClientRect(),
          windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      
        return !(
          Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
          Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
        )
      };

    const checkVisible = () => {
        if (isElementXPercentInViewport(wrapperRef.current, 10)) {
            setVisible(true);
        }
        // Uncomment to enable hiding; @todo - set a hide timer?

        // if (!isElementXPercentInViewport(wrapperRef.current, 1)) {
        //     setVisible(false);
        // }
        
    };

    const throttledCheckVisible = throttle(checkVisible, 200);
    let timer = null;
    const handleScroll = () => {
        throttledCheckVisible();
        if (timer != null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(() => {
            checkVisible();
        }, 100)
    }

    useEffect(() => {
        checkVisible();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    
    return (
        <OuterWrapper outerStyles={outerStyles}>
            <InnerWrapper verticalPadding={verticalPadding} innerStyles={innerStyles}>
                <SectionContent ref={wrapperRef} visible={visible} data-visible={visible}>
                    {children}
                </SectionContent>
            </InnerWrapper>
        </OuterWrapper>
    )
};

export const TwoColumnFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    ${({columnGap = 40, rowGap = 0, flexBasis = 500}) => `
        column-gap: ${columnGap}px;
        row-gap: ${rowGap}px;

        & > * {
            flex: 1 0 ${flexBasis}px;
            max-width: 100%;
        }
    `}
`;