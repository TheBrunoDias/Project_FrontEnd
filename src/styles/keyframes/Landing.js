import {keyframes} from 'styled-components';

const Title = keyframes`
    from{
        transform: scale(0,0);
    }
    to{
        transform: scale(1,1);
    }
`;

const SubTitle = keyframes`
    from{
        transform: translateY(-100%);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

const HeaderButtonHover = keyframes`
    from{
        transform: scale(1,1);
        opacity: 1;
    }
    to{
        transform: scale(1.2,1.5);
        
        opacity: 0;
    }
`;


export {
    Title,
    SubTitle,
    HeaderButtonHover
}