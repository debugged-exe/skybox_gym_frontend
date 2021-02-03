import React from 'react';
import TraineeRegister from '../../Components/TraineeRegister/TraineeRegister';
import TrainerRegister from '../../Components/TrainerRegister/TrainerRegister';
import './EnrollPage.scss';

const EnrollPage = () =>{
    return(
        <div className='enroll-page'>
            <TraineeRegister/>
            <TrainerRegister/>
        </div>
    );
}

export default EnrollPage;