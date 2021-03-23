import {React,useState,useEffect} from 'react';
import './TraineePage.scss';
import Modal from 'react-modal';
import TraineeUpdateInfo from '../../Components/TraineeUpdateInfo/TraineeUpdateInfo';

const TraineePage = () => {
    const [detsModal,setDetsModal] = useState(false);
    const [workoutModal,setworkoutModal] = useState(false);
    const [dietModal,setDietModal] = useState(false);
    const [currUser,setCurrUser] = useState()
    const [trainee,setTrainee] = useState([]);

    useEffect(()=>{
        setCurrUser(localStorage.getItem('det_id'));
        console.log('...'+localStorage.getItem('det_id'))
            const headers = new Headers();
            headers.append('Content-Type','application/json');
            
            if(currUser!==''){
                console.log('fetchingg')
            fetch('https://skybox-athlete.herokuapp.com/get-trainee/'+currUser, {
    
         }).then(res=>res.json())
         .then(res=>{
             setTrainee(res)
         })
        }
      },[currUser])

    return(
        <div className='pl3 pt3 trainee-bg white pb4'>
            <h1 className='ma0'>{trainee.email}</h1>
            <h1 className='ma0'>{trainee.name}</h1>
            <h1>Basic Info</h1>
            <div>
                <p className='f4 mh2'>Age : <span className='gray'>{trainee.age}</span></p>
                <p className='f4 mh2'>Height : <span className='gray'>{trainee.height}</span></p>
                <p className='f4 mh2'>Weight : <span className='gray'>{trainee.weight}</span></p>
                <p className='f4 mh2'>BMI : <span className='gray'>{trainee.bmi}</span></p>
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