import React,{useState} from 'react';
import {IoIosAddCircle} from 'react-icons/io';
import DietRow from './DietRow';


const DietForm = () => {

const [diet,setDiet] = useState([	
		{
			time:"9:00 am",
			item:"apple",
			qty:"1"
		},
		{
			time:"10:00 am",
			item:"banana",
			qty:"1"
		},
		{
			time:"11:00 am",
			item:"guava",
			qty:"2"
		}
	    ])

    return(
        <div className='black'>
            <div class="pa4">
              <div class="flex flex-column items-center overflow-auto">
                <table class="f4 w-100 mw8 center" cellspacing="0">
                  <thead>
                    <tr>
                      <th class="fw6 bb b--black-20 tl pb3 pr3">Time</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3">Item</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3">Qty</th>
                    </tr>
                  </thead>
                  <tbody class="lh-copy">
                    {
                      diet.map((item,idx)=>{
                        return(
                          <DietRow key={idx} content = {item}/>
                        )
                      })
                    }
                  </tbody>
                </table>
                <IoIosAddCircle className='ma2 pointer' size={'2.6rem'} color={'#00449e'}/>
              </div>
            </div>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Set Diet</a>
        </div>
    );
}

export default DietForm;