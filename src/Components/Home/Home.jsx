import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Counter from  '../Counter/Counter';

const Home = () => {
    return(
        <div  className='home-background white flex justify-center items-center flex-column ph2'>
            <h1 className='w-50 width tc'>Get . Set . Workout</h1>
            <Link className="f4 br2 link ph3 pv2 mb2 dib white bg-dark-blue" style={{outline:'none'}} to="/#enquire">Enquire Now</Link>
            <Counter/>
        </div>
    );
}

export default Home;