import { motion } from "framer-motion";
import { useState } from 'react';

import { Container, OpenModal, ChildrenContainer } from './style';

const variants = {
    open: { opacity: 1, y: "10%",display:'block' },
    closed: { opacity: 0, y: "0%",display:'none' },
}

export default function DropDown({ title, children }) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <OpenModal onClick={() => setIsOpen(!isOpen)}> {title} </OpenModal>
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <ChildrenContainer>
                    {children}
                </ChildrenContainer>
            </motion.nav>
        </Container>
    );
}