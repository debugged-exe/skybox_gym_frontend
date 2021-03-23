import React from 'react';
import  Carousel from 'react-elastic-carousel'; 
import TransformationCards from './TransformationCards';
import before1 from './before1.jpeg'
import after1 from './after1.jpeg'
import before2 from './before2.jpg'
import after2 from './after2.jpg'
import before3 from './before3.jpeg'
import after3 from './after3.jpeg'
import './TransformationCards.css'

const breakPoints = [
    { width : 1, itemsToShow : 1},
]

const transformation = [
    {
        name:'Robin Sawant',
        transformationStory:'A inactive lifestyle and reliance on fast food and ready meals meant Robin started steadily gaining weight during uni. But when he set about trying to get healthy, he began restricting all ‘bad foods’ and developed an all-consuming obsession with his weight',
        beforeUrl:before1,
        afterUrl:after1
    },
    {
        name:'Rushikesh Wani',
        transformationStory:'Rushikesh had been overweight for most of his life, but it was only after he decided he was sick of living with weight-related health issues. He knew getting healthy would help him be a better. He started counting his calories and planning his meals with us. And there are the results',
        beforeUrl:before2,
        afterUrl:after2
    },
    {
        name:'Vidhit Tambe',
        transformationStory:'We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation.',
        beforeUrl:before3,
        afterUrl:after3
    },
]

const TransformationCardList = () => {
    return(
        <div className='ph3 margin-horizontal ba br4 ma6'>
            <h1 className='tc f1 ma0 mt1'  data-aos='fade-up'>Our <b style={{color:'#00d0ff'}} >Happy Transforms</b></h1>
        <Carousel breakPoints={breakPoints}>
            {transformation.map(transform => 
                <TransformationCards transform = {transform} />
            )}
        </Carousel>
        </div>
    );
}

export default TransformationCardList;