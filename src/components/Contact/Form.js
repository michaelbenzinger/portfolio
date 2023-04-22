import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import styled from 'styled-components';
import { createClamp, createFontRules, debounce } from '../../util/functions';
import * as colors from '../../util/colors';
import { letterSpacingL, letterSpacingM, transitionAll } from '../../util/constants';

const Form = styled.form`
    input,
    select,
    textarea,
    fieldset,
    optgroup,
    label {
        border-radius: 0;
        width: 100%;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-family: Inter, sans-serif;
    }

    input,
    select,
    textarea {
        box-sizing: border-box;
    }
    input:focus,
    select:focus,
    textarea:focus {
        outline-style: solid;
        outline-width: thin;
        outline-color: gray;
        outline-offset: -1px;
    }
    [type='text'],
    [type='email'] {
        width: 100%;
    }
    [type='button'],
    [type='submit'],
    [type='reset'] {
        cursor: pointer;
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
    }
    [type='button']:focus,
    [type='submit']:focus,
    [type='reset']:focus {
        outline: none;
    }

    select {
        text-transform: none;
    }
`;

const FieldWrapper = styled.div`
    position: relative;
`;

const StyledValidationError = styled(ValidationError)`
    box-sizing: border-box;
    max-width: 100%;
    margin: -6px 0 4px;
    ${createFontRules(13, 16, 15, 19)}
    color: ${({theme}) => theme == 'light' ? colors.grayM2 : colors.grayM1};
    transition: color 0.3s;
`;

const Button = styled.button`
    ${createFontRules(16, 20, 17, 21)};
    font-family: Inter, sans-serif;
    font-weight: 400;
    ${letterSpacingM};
    background: ${({theme}) => theme == 'light' ? colors.blueC1 : colors.blueC2};
    color: ${colors.grayL1};
    margin: ${createClamp(25, 40)} auto 0;
    width: ${createClamp(170, 180)};
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding: 0 8px;
    border: none;
    ${transitionAll} border 0s;

    ${({disabled, theme}) => !disabled
        ? `
            cursor: pointer;

            &:hover {
                background: ${colors.blueC1}DD;
            }

            &:focus {
                background: ${colors.blueC1}DD;
                border: ${theme == 'light' ? `2px solid ${colors.black1}` : `1px solid ${colors.grayL3}`};
            }

            &:active {
                transition: background-color 0.05s;
                background: ${theme == 'light' ? colors.blueC2 : colors.blueC1};
            }
        `
        : `
            cursor: default;
        `
    }

    ${props => props.submitting && `
        // transition: background-color 0.25s;
        // background-color: transparent;
    `}
    ${props => props.succeeded && `
        // transition: background-color 0.25s;
        // background-color: transparent;
    `}
`;

const Loader = styled.div`
    --brand-success: ${colors.green1};
    --loader-size: 1.75em;
    --check-height: calc(var(--loader-size) * 0.45);
    --check-width: calc(var(--check-height) * 0.45);
    --check-left: calc(var(--loader-size) * 0.25);
    --check-top: calc(var(--loader-size) * 0.075);
    --check-thickness: 1px;
    --check-color: var(--brand-success);

    color: var(--brand-success);
    border: var(--check-thickness) solid ${colors.grayL3}77;
    border-left-color: var(--brand-success);
    animation: loader-spin 1.2s infinite linear;
    position: relative;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    width: var(--loader-size);
    height: var(--loader-size);

    ${props => props.succeeded && `
        -webkit-animation: none;
        animation: none;
        border-color: var(--check-color);
        transition: border 500ms ease-out, color 0.3s;
    `}

    .checkmark {
        ${props => props.succeeded ? `display: block;` : `display: none;`}
        
        &:after {
            content: '';
            opacity: 1;
            animation: checkmark 800ms ease;
            transform: scaleX(-1) rotate(135deg);
            height: var(--check-height);
            width: var(--check-width);
            position: absolute;
            transform-origin: left top;
            left: var(--check-left);
            top: calc(var(--check-top) + var(--check-height));
            border-right: var(--check-thickness) solid var(--check-color);
            border-top: var(--check-thickness) solid var(--check-color);
        }
    }

    @keyframes loader-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes checkmark {
        0% {
            height: 0;
            width: 0;
            opacity: 1;
        }
        20% {
            height: 0;
            width: var(--check-width);
            opacity: 1;
        }
        40% {
            height: var(--check-height);
            width: var(--check-width);
        }
    }
`;

const Disclaimer = styled.span`
    ${createFontRules(13, 16, 14, 18)};
    ${letterSpacingL};
    font-weight: 400;
    display: block;
    margin-bottom: 0.5em;
    color: ${colors.grayM2};
    text-align: center;

    a {
        color: ${({theme}) => theme == 'light' ? colors.grayD1 : colors.grayL3};
    }
`;

const labelPadding = "padding: 1.1rem 0.9rem";
const labelPaddingShift = "padding: 0.3rem 0.9rem";
const inputPadding = "padding: 1.6rem 0.9rem 0.5rem";
const textAreaPadding = "padding: 1.6rem 0.9rem 0.5rem";

const IntegratedBox = styled.div`
    position: relative;
    cursor: text;
    margin-bottom: 1.5rem;
    background: ${props => props.background};

    label {
        ${labelPadding};
        ${createFontRules(15, 20, 18, 24)};
    }

    &:focus-within label {
        ${labelPaddingShift};
        ${createFontRules(13, 16, 15, 19)};
    }

    ${props => props.value != "" && `
        label {
            ${labelPaddingShift};
            ${createFontRules(13, 16, 15, 19)};
        }
    `}
`;

const IntegratedLabel = styled.span`
    pointer-events: none;
    position: absolute;
    cursor: text;
    display: block;
    margin-bottom: ${createClamp(4, 8)};
    ${createFontRules(15, 20, 18, 24)};
    color: ${({theme}) => theme == 'light' ? colors.grayD1 : colors.grayM1};
    transition: color 0.3s;
    background: ${props => props.background};
    ${props => `
        opacity: ${props.labelOpacity};
        ${props.labelOpacity == 1
            ? `transition: padding 0.1s, font-size 0.1s, opacity 0.75s;`
            : `transition: padding 0.1s, font-size 0.1s, opacity 0.2s;`
        }
    `}
`;

const IntegratedInput = styled.input`
    cursor: text;
    ${inputPadding};
    ${createFontRules(15, 20, 18, 24)};
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL3};
    background-color: transparent;
    border: 1px solid ${({theme}) => theme == 'light' ? colors.grayD1 : colors.grayL3};
    ${props => props.readOnly && `
        background-color: ${colors.grayM2}44;
        transition: background-color 0.5s, color 0.3s;
    `}
`;

const IntegratedTextArea = styled.textarea`
    cursor: text;
    ${textAreaPadding};
    ${createFontRules(15, 20, 18, 24)};
    color: ${({theme}) => theme == 'light' ? colors.grayD3 : colors.grayL3};
    border: 1px solid ${({theme}) => theme == 'light' ? colors.grayD1 : colors.grayL3};
    resize: vertical;
    min-height: 100px;
    max-height: 300px;
    background-color: transparent;
    ${props => props.readOnly && `
        background-color: ${colors.grayM2}44;
        transition: background-color 0.5s, color 0.3s;
    `}
`;

const IntegratedField = ({ type, name, label, readOnly, inputProps, theme }) => {
    const inputComponents = {
        input: IntegratedInput,
        textArea: IntegratedTextArea,
    }

    const Input = inputComponents[type]

    const [value, setValue] = useState("");
    const [labelOpacity, setLabelOpacity] = useState(1);

    const changeHandler = (e) => {
        setValue(e.target.value);
    };

    const scrollHandler = (e) => {
        debounce(checkScroll, 7, e)
    };

    const checkScroll = (e) => {
        setLabelOpacity(e.target.scrollTop <5 ? 1 : 0);
    }

    return (
        <IntegratedBox value={value}>
            <IntegratedLabel
                theme={theme}
                labelOpacity={labelOpacity}
                as="label"
                htmlFor={name}
            >
                {label}
            </IntegratedLabel>
            <Input
                theme={theme}
                onScroll={scrollHandler}
                onChange={changeHandler}
                id={name}
                name={name}
                readOnly={readOnly}
                required
                {...inputProps}
            />
        </IntegratedBox>
    )
}

const ContactForm = ({ theme }) => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [state, handleSubmit] = useForm('xyyabowb', {
        data: { 'g-recaptcha-response': executeRecaptcha },
    });

    // const [fakeSubmitting, setFakeSubmitting] = useState(false);
    // const [fakeSucceeded, setFakeSucceeded] = useState(false);

    // const handleFakeClick = () => {
    //     setFakeSubmitting(true);
    //     setTimeout(() => {
    //         setFakeSubmitting(false);
    //         setFakeSucceeded(true);
    //     }, 5000);
    // }

    return (
        <Form id="contact-form" onSubmit={handleSubmit} accept-charset="utf-8">
        {/* <Form id="contact-form" accept-charset="utf-8"> */}
            <IntegratedField theme={theme} type="input" name="name" label="Name" readOnly={state.submitting || state.succeeded} />
            <FieldWrapper>
                <StyledValidationError
                    theme={theme} 
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
                <IntegratedField theme={theme} type="input" name="email" label="Email" readOnly={state.submitting || state.succeeded} inputProps={{
                    type: 'email',
                }} />
            </FieldWrapper>
            <FieldWrapper>
                <StyledValidationError
                    theme={theme} 
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                />
                <IntegratedField theme={theme} type="textArea" name="message" label="Message" readOnly={state.submitting || state.succeeded} inputProps={{
                    rows: '5',
                }} />
            </FieldWrapper>
            <Disclaimer theme={theme}>
                All fields are required. This site is protected by reCAPTCHA and the Google <a target="_blank" rel="noreferrer noopener" href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" rel="noreferrer noopener" href="https://policies.google.com/terms">Terms of Service</a> apply.
            </Disclaimer>
            <Button
                theme={theme} 
                type="submit"
                submitting={state.submitting}
                succeeded={state.succeeded}
                disabled={state.submitting || state.succeeded}
            >
                {!state.submitting && !state.succeeded
                    ? 'Send message'
                    : <Loader
                        theme={theme} 
                        submitting={state.submitting}
                        succeeded={state.succeeded}
                    >
                        <div className="checkmark" />
                    </Loader>
                }
            </Button>
            {/* <Button
                theme={theme} 
                onClick={handleFakeClick}
                submitting={fakeSubmitting}
                succeeded={fakeSucceeded}
                disabled={fakeSubmitting || fakeSucceeded}
            >
                {!fakeSubmitting && !fakeSucceeded
                    ? 'Send message'
                    : <Loader
                        theme={theme} 
                        submitting={fakeSubmitting}
                        succeeded={fakeSucceeded}
                    >
                        <div className="checkmark" />
                    </Loader>
                }
            </Button> */}
        </Form>
    );
};

export default ContactForm;
