import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { HeadWrapper } from '../components/global';
import { About, Contact, Hero, Skills, Work } from '../components';

const IndexPage = () => {
    return (
        <DefaultLayout>
            <Hero />
            <Skills />
            <About />
            <Work />
            <Contact />
        </DefaultLayout>
    );
};

export default IndexPage;

export const Head = () => (
    <HeadWrapper>
        <title>Home Page</title>
    </HeadWrapper>
);