import { keyframes } from "styled-components";

const TitleAfterAnimation = keyframes`
    0%{
        transform: translateX(100%);
        opacity: 0;

    }
    50%{
        transform: translateX(0%);
    }
    100%{
        opacity: 1;
    }

`;

const SubTitleAnimation = keyframes`
    from{
        opacity: 0;
        transform: translateX(-100%);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }}
`;

export { TitleAfterAnimation, SubTitleAnimation };
