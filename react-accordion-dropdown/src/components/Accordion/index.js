import React, { useEffect, useState } from 'react';
import { FAQs } from './Data';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {
    AccordionSection, AccordionContainer, Wrapper,
    Heading, Body, Span, Dropdown
} from './AccordionStyles';
import { IconContext } from 'react-icons';

const Accordion = () => {
    // States, references
    const [clicked, setClicked] = useState(null);

    // Method to reveal the content
    const toggle = idx => setClicked(clicked === idx ? null : idx);

    return (
        <>
            <IconContext.Provider value={{ color: 'var(--clr-icons)', size: '25px' }}>
                <AccordionSection>
                    <AccordionContainer>
                        {FAQs.map((FAQ, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <Wrapper onClick={() => toggle(idx)}>
                                        <Heading>{FAQ.question}</Heading>
                                        <Span>
                                            {clicked === idx ? <FiMinus /> : <FiPlus />}
                                        </Span>
                                    </Wrapper>
                                    {clicked === idx ? (
                                        <Dropdown>
                                            <Body>{FAQ.answer}</Body>
                                        </Dropdown>
                                    ) : null}
                                </React.Fragment>
                            )
                        })}
                    </AccordionContainer>
                </AccordionSection>
            </IconContext.Provider>
        </>
    )
}

export default Accordion