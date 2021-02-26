import React from 'react';
import TrainerCard from './TrainerCard';
import  Carousel from 'react-elastic-carousel'; 

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
        profileUrl:'data:image/jpeg;base64,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',
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
        <div className='ph6 margin-horizontal'>
            <h1 className='tc'>Our Trainers</h1>
        <Carousel breakPoints={breakPoints}>
            {trainersArray.map(trainer => 
                <TrainerCard key={trainer.age} trainer={trainer}/>
            )}
        </Carousel>
        </div>
    );
}

export default TrainerCardList;