import {React,useState} from 'react';
import './TraineePage.scss';
import Modal from 'react-modal';

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
            <a style={{outline:'none'}} class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0" onClick={()=>setDetsModal(true)}>Update Info</a>
            <a style={{outline:'none'}} class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0" onClick={()=>setDietModal(true)}>View Diet</a>
            <a style={{outline:'none'}} class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0" onClick={()=>setworkoutModal(true)}>View Workout</a>
            </div>
            <Modal isOpen={detsModal} >
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0" onClick={()=>setDetsModal(false)}>X</a>
            </Modal>
            <Modal isOpen={dietModal}>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0" onClick={()=>setDietModal(false)}>X</a>
            </Modal>
            <Modal isOpen={workoutModal}>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue mh2" href="#0" onClick={()=>setworkoutModal(false)}>X</a>
            </Modal>
        </div>
    );
}

export default TraineePage;