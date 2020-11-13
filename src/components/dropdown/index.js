import { useState } from "react";

import { Container, OpenModal, ChildrenContainer } from "./style";

export default function DropDown({ title, children }) {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <Container>
      <OpenModal onClick={() => setOpenDropDown(!openDropDown)}>
        {title}
      </OpenModal>
      {openDropDown ? (
        <ChildrenContainer onMouseLeave={() => setOpenDropDown(false)}>
          {children}
        </ChildrenContainer>
      ) : null}
    </Container>
  );
}
