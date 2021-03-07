import {React,useState} from 'react';
import './TraineePage.scss';
import Modal from 'react-modal';
import TraineeUpdateInfo from '../../Components/TraineeUpdateInfo/TraineeUpdateInfo';

const TraineePage = () => {
    const [detsModal,setDetsModal] = useState(false);
    const [workoutModal,setworkoutModal] = useState(false);
    const [dietModal,setDietModal] = useState(false);
    return(
        <div className='pl3 pt3 trainee-bg white pb4'>
            <h1 className='ma0'>Tanmay Jagtap</h1>
            <h3 className='mh2'>Joined : <span className='gray'>22/12/2021</span> </h3>
            <h3 className='mh2'>Ends : <span className='gray'>22/12/2021</span> </h3>
            <h1>Basic Info</h1>
            <div>
                <p className='f4 mh2'>Age : <span className='gray'>20</span></p>
                <p className='f4 mh2'>Height : <span className='gray'>20</span></p>
                <p className='f4 mh2'>Weight : <span className='gray'>20</span></p>
                <p className='f4 mh2'>BMI : <span className='gray'>20</span></p>
            </div>
            <div>
            <p style={{outline:'none'}} class="pointer f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" onClick={()=>setDetsModal(true)}>Update Info</p>
            <p style={{outline:'none'}} class="pointer f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" onClick={()=>setDietModal(true)}>View Diet</p>
            <p style={{outline:'none'}} class="pointer f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" onClick={()=>setworkoutModal(true)}>View Workout</p>
            </div>
            <Modal isOpen={detsModal} >
            <p class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2 pointer" onClick={()=>setDetsModal(false)}>X</p>
            <TraineeUpdateInfo/>
            </Modal>
            <Modal isOpen={dietModal}>
            <p class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2 pointer" onClick={()=>setDietModal(false)}>X</p>
            </Modal>
            <Modal isOpen={workoutModal}>
            <p class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2 pointer" onClick={()=>setworkoutModal(false)}>X</p>
            </Modal>
        </div>
    );
}

export default TraineePage;