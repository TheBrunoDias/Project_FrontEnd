// REACT HOOKS
import { useState } from 'react';

//STYLE FROM STYLED-COMPONENT
import { Container, OpenModal, ChildrenContainer } from './style';

export default function DropDown({ title, children }) {
  const [openDropDown, setOpenDropDown] = useState('none');

  return (
    <Container>
      <OpenModal
        onClick={() =>
          setOpenDropDown(openDropDown === 'none' ? 'flex' : 'none')
        }
      >
        {title}
      </OpenModal>

      <ChildrenContainer style={{ display: `${openDropDown}` }}>
        {children}
      </ChildrenContainer>
    </Container>
  );
}
