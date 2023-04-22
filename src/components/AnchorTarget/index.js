import React from 'react';
import styled from 'styled-components';

const Target = styled.div`
    visibility: hidden;
    height: 1px;
    width: 1px;
    transform: translateY(-100px);
`;

const AnchorTarget = ({ id }) => {

    return (
        <Target id={id} />
    )
}

export default AnchorTarget;
