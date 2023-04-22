import * as React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { HeadWrapper } from '../components/global';

const NotFoundPage = () => {
    return (
        <DefaultLayout>
            
        </DefaultLayout>
    )
};

export default NotFoundPage;

export const Head = () => (
    <HeadWrapper>
        <title>Not Found</title>
    </HeadWrapper>
);