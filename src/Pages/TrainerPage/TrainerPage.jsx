import {React,useState,useEffect} from 'react';
import 'tachyons';
import Modal from 'react-modal';
import TrainerUpdateInfo from '../../Components/TrainerUpdateInfo/TrainerUpdateInfo';
import WorkOutForm from '../../Components/WorkOutForm/WorkOutForm';
import DietForm from '../../Components/DietForm/DietForm';

const TrainerPage = () => {

  const [viewDets,setViewDets] = useState(false);
  const [workoutModal,setworkoutModal] = useState(false);
  const [dietModal,setDietModal] = useState(false);
  const [infoModal,setInfoModal] = useState(false);
  const [trainees,setTrainees] = useState([]);
  const [traineeDet,setTraineeDet] = useState(null);
  const [currUser,setCurrUser] = useState()
  const [currUserDet,setCurrUserDet] = useState();
  useEffect(()=>{
    setCurrUser(localStorage.getItem('id'));
		const headers = new Headers();
		headers.append('Content-Type','application/json');
		console.log('curr '+currUser)
		fetch('https://skybox-athlete.herokuapp.com/get-trainer/'+currUser, {

	 }).then(res=>res.json())
	 .then(res=>{
		 setCurrUserDet(res.email)
	 })

   const detailID = localStorage.getItem('det_id')
		fetch('https://skybox-athlete.herokuapp.com/get-my-clients/'+detailID, {

	 }).then(res=>res.json())
	 .then(res=>{
		 setTrainees(res)
	 })
  })

        return(
            <div className='flex justify-center items-center flex-column'>
                <div>
                    <h1>{currUserDet}</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h3>
                </div>
                <p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" onClick={()=>setInfoModal(true)}>Update Info</p>
                <div>
                    <h1>Clients</h1>
                    <div className="">
                      <div className="overflow-auto">
                        <table className="f6 w-100 mw8 center" cellspacing="0">
                          <thead>
                            <tr>
                              <th className="fw6 f4 bb b--black-20 tl pb3 pr3">Name</th>
                              <th className="fw6 f4 bb b--black-20 tl pb3 pr3">Mode</th>
                            </tr>
                          </thead>
                          <tbody className="lh-copy">
                          {trainees.map((trainee,index) =>(
                            <tr>
                              <td className="pv3 pr3 bb b--black-20">{trainee.name}</td>
                              <td className="pv3 pr3 bb b--black-20">{trainee.formOfTraining}</td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" onClick={()=>{setViewDets(true);setTraineeDet(trainee)}} >ViewDets</p></td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" onClick={()=>setDietModal(true)}>SetDiet</p></td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" onClick={()=>{setworkoutModal(true);setTraineeDet(trainee)}}>SetWorkout</p></td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" href="#0">SendMeetingLink</p></td>
                            </tr>
                          ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                </div>
              <Modal isOpen={infoModal}>
              <p className="f6 pointer link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={()=>setInfoModal(false)} >X</p>
              <TrainerUpdateInfo/>
              </Modal>
              <Modal isOpen={viewDets} >
              <p className="f6 pointer link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={()=>setViewDets(false)} >X</p>
              {traineeDet==null ?
              <div className="black">
                could not fetch
              </div>
              :
              <div className="black">
                Name : {traineeDet.name}<br/>
                Gender: {traineeDet.gender}<br/>
                Contact: {traineeDet.contact}<br/>
                Target: {traineeDet.target}                
              </div>
              }
              </Modal>
              <Modal isOpen={dietModal}>
              <p className="f6 pointer link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={()=>setDietModal(false)} >X</p>
              <div>
                <DietForm/>
              </div>
              </Modal>
              <Modal isOpen={workoutModal}>
              <p className="f6 pointer link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={()=>setworkoutModal(false)} >X</p>
              <div>
                <WorkOutForm det={traineeDet}/>
              </div>
              </Modal>
            </div>
        );
}

export default TrainerPage;