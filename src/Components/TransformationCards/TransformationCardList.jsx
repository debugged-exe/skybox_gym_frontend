import React from 'react';
import  Carousel from 'react-elastic-carousel'; 
import TransformationCards from './TransformationCards';
import before1 from './before1.jpeg'
import after1 from './after1.jpeg'
import before2 from './before2.jpg'
import after2 from './after2.jpg'
import './TransformationCards.css'

const breakPoints = [
    { width : 1, itemsToShow : 1},
]

const transformation = [
    {
        name:'Robin Sawant',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. ',
        beforeUrl:before1,
        afterUrl:after1
    },
    {
        name:'Rushikesh Wani',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. ',
        beforeUrl:before2,
        afterUrl:after2
    },
    {
        name:'Vidhit Tambe',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation.',
        beforeUrl:before1,
        afterUrl:after1
    },
]

const TransformationCardList = () => {
    return(
        <div className='ph3 margin-horizontal ba br4 ma6'>
            <h1 className='tc f1 ma0 mt1'>Our <b style={{color:'#00d0ff'}}>Happy Transforms</b></h1>
        <Carousel enableAutoPlay='true' focusOnSelect='true' breakPoints={breakPoints}>
            {transformation.map(transform => 
                <TransformationCards transform = {transform} />
            )}
        </Carousel>
        </div>
    );
}

export default TransformationCardList;