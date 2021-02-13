import React from 'react';
import 'tachyons';

class TrainerPage extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
        }
    }

    render(){
        return(
            <div className='flex justify-center items-center flex-column'>
                <div>
                    <h1>Ankita Zadoo</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h3>
                </div>
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
                              <td className="pv3 pr3 bb b--black-20"><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">ViewDets</a></td>
                              <td className="pv3 pr3 bb b--black-20"><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">SetDiet</a></td>
                              <td className="pv3 pr3 bb b--black-20"><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">SetWorkout</a></td>
                              <td className="pv3 pr3 bb b--black-20"><a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">SendMeetingLink</a></td>
                            </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default TrainerPage;