import React, { useState } from 'react';
import { Container, Button } from './HomeStyles';
import Modal from '../../components/Modal';

const Home = () => {
    // States, references
    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <Button onClick={() => setShowModal(!showModal)}>
                I'm a modal
            </Button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </Container>
    )
}

export default Home