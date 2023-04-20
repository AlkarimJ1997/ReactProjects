import React from 'react'
import InfoSection from '../../components/InfoSection'
import Pricing from '../../components/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home