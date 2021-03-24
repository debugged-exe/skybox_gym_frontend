import React from 'react';
import './About.css';

const About = () => {
    return(
        <div id='about' className='flex pt0 ph6 flex-column justify-center items-center'> 
            <h2 className='f2' data-aos='fade-up'>About Gym</h2>
            <div className='underline'></div>
            <p   data-aos='fade-up' className='ph5 f4 tc about-padding'>
            Skybox Athlete is passion project an anti gym that Focuses only on hyper individualized fitness solution..every solutions we present comes from analyzing each client individual physiology and psychology we pattern and approch that takes you from unhappy out of shape and week to exhilaratiled excited about life and extremely strong both physically and mentally.
            </p>
            <br/>
            <p  data-aos='fade-up'  className='ph6 f4 tc about-padding'>We don't play group of individuals we train individuals in group class the weakest person in the class gains the most and anyone in slightly better in shape than the weakest person sees a decrease benefits this is something the bootcamp will hide from you or they simply don't know anything about it
The philosophy here is skybox Athlete is really special because it is exact opposite</p>
        </div>
    );
}

export default About;