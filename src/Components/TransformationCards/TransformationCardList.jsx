import React from 'react';
import  Carousel from 'react-elastic-carousel'; 
import TransformationCards from './TransformationCards';
import before1 from './before1.jpeg'
import after1 from './after1.jpeg'


const breakPoints = [
    { width : 1, itemsToShow : 1},
]

const transformation = [
    {
        name:'Tanmay J',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. ',
        beforeUrl:before1,
        afterUrl:after1
    },
    {
        name:'Tejas L',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. ',
        beforeUrl:before1,
        afterUrl:after1
    },
    {
        name:'Tejas M',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation.',
        beforeUrl:before1,
        afterUrl:after1
    },
]

const TransformationCardList = () => {
    return(
        <div className='pv2 ph3 margin-horizontal ba br4 ma6'>
            <h1 className='tc f1'>Our <b style={{color:'#00d0ff'}}>Happy Transforms</b></h1>
        <Carousel enableAutoPlay='true' focusOnSelect='true' breakPoints={breakPoints}>
            {transformation.map(transform => 
                <TransformationCards transform = {transform} />
            )}
        </Carousel>
        </div>
    );
}

export default TransformationCardList;