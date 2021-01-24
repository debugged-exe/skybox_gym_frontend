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
    setTraineeCount(0);
    setTrainerCount(0);
    let trainer  = counterArray[0].count;
    let trainee  = counterArray[1].count;

    let step1 = trainer / 2000;
    let step2 = trainee / 2000;


    let tr;
    let te;

    let countIt = ()  => {
        let displayedCountTrainer = +trainerCount;
        let displayedCountTrainee = +traineeCount;
            if (displayedCountTrainer < trainer ) {
                setTrainerCount(Math.ceil(displayedCountTrainer + step1)); 
                setTimeout(countIt, 25);
                // console.log(trainerCount);
                tr = displayedCountTrainer;
            }
            else {
                setTrainerCount(trainer);
                tr = displayedCountTrainer;
            }
            if (displayedCountTrainee < trainee ) {
                setTraineeCount(Math.ceil(displayedCountTrainee + step2)); 
                setTimeout(countIt, 25);
                // console.log(traineeCount);
                te = displayedCountTrainee;
            }
            else {
                setTrainerCount(trainee);
                te = displayedCountTrainee;
            }
        }

        
        // if(tr !== trainer && te !== trainee){
        //     countIt();
        // }
        // else{
        //     return 0;
        // }
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