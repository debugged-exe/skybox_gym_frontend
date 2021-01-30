import React from 'react';
import TrainerCard from './TrainerCard';
import  Carousel from 'react-elastic-carousel'; 
import styled from 'styled-components';

const breakPoints = [
    { width : 1, itemsToShow : 1},
    { width : 550, itemsToShow : 2},
    { width : 760, itemsToShow : 3},
    { width : 1200, itemsToShow : 4},
]

const trainersArray = [
    {
        name : 'Tanmay',
        age : '20',
        profileUrl:'https://p.kindpng.com/picc/s/21-217931_transparent-personal-trainer-png-portable-network-graphics-png.png',
        description: 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,and touch water with paw then recoil in horror.'
    },
    {
        name : 'Tejas M',
        age : '20',
        profileUrl:'https://p.kindpng.com/picc/s/21-217931_transparent-personal-trainer-png-portable-network-graphics-png.png',
        description: 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,and touch water with paw then recoil in horror.'
    },
    {
        name : 'Ankita Z',
        age : '20',
        profileUrl:'https://p.kindpng.com/picc/s/21-217931_transparent-personal-trainer-png-portable-network-graphics-png.png',
        description: 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,and touch water with paw then recoil in horror.'
    },
    {
        name : 'Sayali',
        age : '20',
        profileUrl:'https://p.kindpng.com/picc/s/21-217931_transparent-personal-trainer-png-portable-network-graphics-png.png',
        description: 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,and touch water with paw then recoil in horror.'
    },
    {
        name : 'Labde',
        age : '20',
        profileUrl:'https://p.kindpng.com/picc/s/21-217931_transparent-personal-trainer-png-portable-network-graphics-png.png',
        description: 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,and touch water with paw then recoil in horror.'
    },
    {
        name : 'Sumedh',
        age : '20',
        profileUrl:'https://p.kindpng.com/picc/s/21-217931_transparent-personal-trainer-png-portable-network-graphics-png.png',
        description: 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,and touch water with paw then recoil in horror.'
    }
]

const TrainerCardList = () => {
    return(
        <div>
            <h1 className='tc'>Our Trainers</h1>
        <Carousel breakPoints={breakPoints}>
            {trainersArray.map(trainer => 
                <TrainerCard trainer={trainer}/>
            )}
        </Carousel>
        </div>
    );
}

export default TrainerCardList;