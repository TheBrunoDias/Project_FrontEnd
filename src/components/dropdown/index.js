import { useState } from 'react';

import { Container, OpenModal, ChildrenContainer } from './style';


export default function DropDown({ title, children }) {

    const [openDropDown, setOpenDropDown] = useState('none');

    return (
        <Container>
            <OpenModal onClick={() => setOpenDropDown(openDropDown === 'none' ? 'flex' : 'none')}> {title} </OpenModal>

            <ChildrenContainer style={{ display: `${openDropDown}` }}>
                {children}
            </ChildrenContainer>


        </Container>
    );
}