import React,{useEffect,useState} from 'react';
import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";


const Counter = () => {


const [trainerCount, setTrainerCount] = useState(0);
const [traineeCount, setTraineeCount] = useState(0);
const [counterArray, setCounterArray] = useState([
    {
        'name':'trainer',
        'count':'100'
    },
    {
        'name':'trainee',
        'count':'200'
    }
]);
const runCounter = () => {
    const trainer = counterArray[0].count 
    const trainee = counterArray[1].count
    const displayedCount1 = 0
    const displayedCount1 = 0
    if(displayedCount1<trainer || displayedCount2<trainee)
    {
        if(displayedCount1===trainer)
        {
            setTrainerCount(trainer);
        }
        if(displayedCount2===trainee)
        {
            setTraineeCount(trainer);
        }
        if(displayedCount1<trainer && displayedCount2<trainee)
        {
            displayedCount1 = displayedCount1+1;
            setTrainerCount(displayedCount1);
            displayedCount2 = displayedCount2+1;
            setTraineeCount(displayedCount2);
        }
        if(displayedCount1<trainer)
    }
}

useEffect(()=>{
    window.addEventListener('scroll',runCounter())
},
[trainerCount,traineeCount]);



    return (
        <section>
            <div className='mt5 flex flex-wrap justify-around items-center f3 pointer'>
                <div style={{ width: '300px', background: '#00D0FF' }} className='flex flex-wrap justify-center items-center flex-column  br3 pa3 ma2 grow shadow-2'>
                    <CgGym size='3.5rem'/>
                    <p className='f1 mv0 b'>{trainerCount}</p>
                    <p className='f3 b'>Trainers</p>
                </div>
                <div style={{ width: '300px', background: '#00D0FF' }} className='flex flex-wrap justify-center items-center flex-column  br3 pa3 ma2 grow shadow-2'>
                    <GiGymBag size='3.5rem'/>
                    <p className='f1 mv0 b'>{traineeCount}</p>
                    <p className='f3 b'>Trainees</p>
                </div>
            </div>
        </section>
    );
}

export default Counter;