import { keyframes } from 'styled-components';

const TitleAfterAnimation = keyframes`
    from{
        transform: translateX(-201%);
    }
    to{
        transform: translateX(0%);
    }
`;

const TitleAnimation = keyframes`
    from{
        color: transparent;
    }
    to{
        color: white;
        text-shadow: 2px 2px 2px black;
    }
`;

const SubTitleAnimation = keyframes`
    from{
        opacity: 0;
        transform: translateY(-500%);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }}
`;

export { TitleAfterAnimation, TitleAnimation, SubTitleAnimation };
