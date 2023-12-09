import React from 'react'
import CardItems from './CardItems'
import './card.css';
function Cards() {
return (
    <div className='cards'>
    
    <h1>Check Out The Following Destinations</h1>
    <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItems 
                src='images/img-9.jpg'
                text='Explore the hidden waterfalls'
                label='Adveture'
                path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItems 
                src='images/img-2.jpg'
                text='Explore he hidden waterfalls'
                label='luxury'
                path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItems 
                src='images/img-9.jpg'
                text='Explore the hidden waterfalls'
                label='Adveture'
                path='/signup'
                />
            </ul>
            <ul className="cards__items">
                <CardItems 
                src='images/img-9.jpg'
                text='Explore the hidden waterfalls'
                label='Adveture'
                path='/products'
                />
            </ul>
            <ul className="cards__items">
                <CardItems 
                src='images/img-9.jpg'
                text='Explore the hidden waterfalls'
                label='Adveture'
                path='/products'
                />
            </ul>
            <ul className="cards__items">
                <CardItems 
                src='images/img-9.jpg'
                text='Explore the hidden waterfalls'
                label='Adveture'
                path='/products'
                />
            </ul>

        </div>
    </div>
    </div>
)
}

export default Cards