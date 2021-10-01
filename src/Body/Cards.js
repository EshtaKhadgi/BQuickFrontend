import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC instruments.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/first.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/shop'
            />
            <CardItem
              src='images/second.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/shop'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/third.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/shop'
            />
            <CardItem
              src='images/hero.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/shop'
            />
            <CardItem
              src='images/alt.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/shop'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;