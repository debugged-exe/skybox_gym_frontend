import {React,useState} from 'react';
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
        return(
            <div className='flex justify-center items-center flex-column'>
                <div>
                    <h1>Ankita Zadoo</h1>
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
                              <th className="fw6 f4 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                              <th className="fw6 f4 bb b--black-20 tl pb3 pr3 bg-white">Username</th>
                              <th className="fw6 f4 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
                              <th className="fw6 f4 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
                            </tr>
                          </thead>
                          <tbody className="lh-copy">
                            <tr>
                              <td className="pv3 pr3 bb b--black-20">HassanJohnson</td>
                              <td className="pv3 pr3 bb b--black-20">@hassan</td>
                              <td className="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
                              <td className="pv3 pr3 bb b--black-20">14419232532474</td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" onClick={()=>setViewDets(true)} >ViewDets</p></td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" onClick={()=>setDietModal(true)}>SetDiet</p></td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" onClick={()=>setworkoutModal(true)}>SetWorkout</p></td>
                              <td className="pv3 pr3 bb b--black-20"><p className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" href="#0">SendMeetingLink</p></td>
                            </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                </div>
              <Modal isOpen={infoModal}>
              <p className="f6 pointer link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={()=>setInfoModal(false)} >X</p>
              <TrainerUpdateInfo/>
              </Modal>
              <Modal isOpen={viewDets}>
              <p className="f6 pointer link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={()=>setViewDets(false)} >X</p>
              <div>
                height weight
              </div>
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
                <WorkOutForm/>
              </div>
              </Modal>
            </div>
        );
}

export default TrainerPage;