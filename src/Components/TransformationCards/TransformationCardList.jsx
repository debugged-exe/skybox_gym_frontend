import React from 'react';
import  Carousel from 'react-elastic-carousel'; 
import styled from 'styled-components';
import TransformationCards from './TransformationCards';

const breakPoints = [
    { width : 1, itemsToShow : 1},
]

const transformation = [
    {
        name:'Tanmay J',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love. Each and every day a new member joins our family, and we ensure that we will keep expanding without overlooking our priorities. ',
        beforeUrl:'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080',
        afterUrl:'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080'
    },
    {
        name:'Tejas L',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love. Each and every day a new member joins our family, and we ensure that we will keep expanding without overlooking our priorities. ',
        beforeUrl:'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080',
        afterUrl:'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080'
    },
    {
        name:'Tejas M',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love. Each and every day a new member joins our family, and we ensure that we will keep expanding without overlooking our priorities. ',
        beforeUrl:'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080',
        afterUrl:'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080'
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