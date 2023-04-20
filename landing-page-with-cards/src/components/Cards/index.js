import React from 'react'
import CardItem from './CardItem';
import img9 from '../../images/img-9.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img8 from '../../images/img-8.jpg';
import './Cards.css';

const Cards = () => {
    // Configuration for the cards
    const cardConfig = [
        [
            {
                imgSource: img9,
                text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
                label: 'Adventure',
                path: '/services'
            },
            {
                imgSource: img2,
                text: 'Travel through the Islands of Bali in a Private Cruise',
                label: 'Luxury',
                path: '/services'
            }
        ],
        [
            {
                imgSource: img3,
                text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
                label: 'Mystery',
                path: '/services'
            },
            {
                imgSource: img4,
                text: 'Experience Football on top of the Himilayan Mountains',
                label: 'Adventure',
                path: '/products'
            },
            {
                imgSource: img8,
                text: 'Ride through the Sahara Desert on a guided camel tour',
                label: 'Adrenaline',
                path: '/sign-up'
            }
        ]
    ]

    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {/* Each ul list separates the cards */}
                    <ul className="cards__items">
                        {cardConfig[0].map((card, index) => {
                            return (
                                <CardItem key={index}
                                    src={card.imgSource}
                                    text={card.text}
                                    label={card.label}
                                    path={card.path} />
                            )
                        })}
                    </ul>
                    <ul className="cards__items">
                        {cardConfig[1].map((card, index) => {
                            return (
                                <CardItem key={index}
                                    src={card.imgSource}
                                    text={card.text}
                                    label={card.label}
                                    path={card.path} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards