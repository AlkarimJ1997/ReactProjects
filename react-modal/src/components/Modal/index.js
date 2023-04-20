import React, { useEffect, useRef, useCallback } from 'react';
import {
    ModalBackground, ModalWrapper, ModalImg,
    ModalContent, ModalHeading, ModalBody,
    ModalButton, CloseButton
} from './ModalStyles';
import { useSpring, animated } from 'react-spring';

const Modal = ({ showModal, setShowModal }) => {
    // States, references
    const modalRef = useRef();

    // Spring animation for modal
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0)' : 'translateY(-100%)'
    });

    // Close modal when user clicks outside of it
    const handleOutsideClick = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    // Close modal when user presses escape
    const handleEscape = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [showModal, setShowModal]);

    // Add keydown listener to modal on page load
    useEffect(() => {
        window.addEventListener('keydown', handleEscape);

        // Cleanup, memory leaks
        return () => {
            window.removeEventListener('keydown', handleEscape);
        }
    }, [handleEscape]);

    return (
        <>
            {showModal ? (
                <ModalBackground ref={modalRef} onClick={handleOutsideClick}>
                    <animated.div style={animation}>
                        <ModalWrapper>
                            <ModalImg src="//unsplash.it/800" alt="Random image" />
                            <ModalContent>
                                <ModalHeading>Are you ready?</ModalHeading>
                                <ModalBody>Get exclusive access to our next launch</ModalBody>
                                <ModalButton>Join Now</ModalButton>
                            </ModalContent>
                            <CloseButton
                                aria-label="Close Modal"
                                onClick={() => setShowModal(false)} />
                        </ModalWrapper>
                    </animated.div>
                </ModalBackground>
            ) : null}
        </>
    )
}

export default Modal