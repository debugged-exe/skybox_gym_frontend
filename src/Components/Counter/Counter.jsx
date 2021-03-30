import React,{useState} from 'react';
import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";
import CountUp from 'react-countup';


const Counter = () => {

const [counterArray, setCounterArray] = useState([
    {
        'name':'trainer',
        'count':'14'
    },
    {
        'name':'trainee',
        'count':'750'
    }
]);

    return (
        <section className='mv5'>
            <div className='mt3 flex flex-wrap justify-around items-center f3 pointer'>
                <div  data-aos='fade-up' style={{ width: '300px', background: '#ffffff21' }} className='flex flex-wrap grow justify-center items-center flex-column  br3 pa3 ma2  ba'>
                    <CgGym size='3.5rem'/>
                    <p className='f1 mv0 b'>
                        <CountUp start={0} end={counterArray[0].count} delay={0}>
                            {({ countUpRef }) => (
                              <span ref={countUpRef} />
                            )}
                        </CountUp>
                    </p>
                    <p className='f3 b'>Trainers</p>
                </div>
                <div  data-aos='fade-up' style={{ width: '300px', background: '#ffffff21' }} className='flex flex-wrap grow justify-center items-center flex-column  br3 pa3 ma2 ba'>
                    <GiGymBag size='3.5rem'/>
                    <p className='f1 mv0 b'>
                        <CountUp start={0} end={counterArray[1].count} delay={0}>
                            {({ countUpRef }) => (
                              <span ref={countUpRef} />
                            )}
                        </CountUp>
                    </p>
                    <p className='f3 b'>Trainees</p>
                </div>
            </div>
        </section>
    );
}

export default Counter;