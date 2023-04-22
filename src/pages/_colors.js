// import * as React from 'react';
// import DefaultLayout from '../layouts/DefaultLayout';
// import { Section } from '../layouts/LayoutComponents';
// import { HeadWrapper } from '../components/global';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//     display: flex;
//     border: 1px solid black;
//     padding: 10px;
// `;

// const ColorBlock = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 10%;
//     aspect-ratio: 0.25;
//     background: var(--c-t-${props => props.num});
//     color: ${props => typeof props.num == 'number' && props.num <= 5
//         ? `var(--c-t-9)`
//         : `var(--c-t-1)`
//     };
// `;

// const IndexPage = () => {
//     return (
//         <DefaultLayout>
//             <Section verticalPadding={120}>
//                 <Wrapper>
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 'success', 'error'].map(num => (
//                         <ColorBlock num={num} key={num}>
//                             <div>{num}</div>
//                         </ColorBlock>
//                     ))}
//                 </Wrapper>
//             </Section>
//         </DefaultLayout>
//     );
// };

// export default IndexPage;

// export const Head = () => (
//     <HeadWrapper>
//         <title>Colors</title>
//     </HeadWrapper>
// );
