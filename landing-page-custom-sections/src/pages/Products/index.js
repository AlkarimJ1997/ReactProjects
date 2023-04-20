import React from 'react'
import HeroSection from '../../components/HeroSection'
import Pricing from '../../components/Pricing'
import { homeObjFour } from './Data'

const Products = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Products