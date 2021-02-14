import React from 'react';
import './TraineePage.scss';

const TraineePage = () => {
    return(
        <div className='pl3 pt3 trainee-bg white pb4'>
            <h1 className='ma0'>Tanmay Jagtap</h1>
            <h3 className='mh2'>Joined : <span className='gray'>22/12/2021</span> </h3>
            <h3 className='mh2'>Ends : <span className='gray'>22/12/2021</span> </h3>
            <h1>Basic Info</h1>
            <div>
                <p className='f4 mh2'>Age : <span className='gray'>20</span><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Edit</a><a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Save</a></p>
                <p className='f4 mh2'>Height : <span className='gray'>20</span><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Edit</a><a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Save</a></p>
                <p className='f4 mh2'>Weight : <span className='gray'>20</span><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Edit</a><a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Save</a></p>
                <p className='f4 mh2'>BMI : <span className='gray'>20</span><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Edit</a><a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">Save</a></p>
            </div>
            <div>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">View Diet</a>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0">View Workout</a>
            </div>
        </div>
    );
}

export default TraineePage;