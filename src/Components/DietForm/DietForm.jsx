import React from 'react';
import {MdModeEdit} from 'react-icons/md';
import {RiDeleteBinFill} from 'react-icons/ri';
import {IoIosAddCircle} from 'react-icons/io';
const DietForm = () => {
    return(
        <div className='black'>
            <div class="pa4">
              <div class="overflow-auto">
                <table class="f4 w-100 mw8 center" cellspacing="0">
                  <thead>
                    <tr>
                      <th class="fw6 bb b--black-20 tl pb3 pr3">Time</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3">Item</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3">Qty</th>
                    </tr>
                  </thead>
                  <tbody class="lh-copy">
                    <tr>
                      <td class="pv3 pr3 bb b--black-20"><input id="name" class="input-reset ba b--black-20 pa2 mb2 db" type="text" aria-describedby="name-desc"/></td>
                      <td class="pv3 pr3 bb b--black-20"><input id="name" class="input-reset ba b--black-20 pa2 mb2 db" type="text" aria-describedby="name-desc"/></td>
                      <td class="pv3 pr3 bb b--black-20"><input id="name" class="input-reset ba b--black-20 pa2 mb2 db" type="text" aria-describedby="name-desc"/></td>
                      <td><a class="f2 link dim ph3 pv0 mb2 dib white bg-dark-blue" href="#0"><MdModeEdit size={'1.5rem'}/></a></td>
                      <td><a class="f2 link dim ph3 pv0 mb2 dib white bg-dark-blue" href="#0"><RiDeleteBinFill size={'1.5rem'}/></a></td>
                      <td><a class="f2 link dim ph3 pv0 mb2 dib white bg-dark-blue" href="#0"><IoIosAddCircle size={'1.5rem'}/></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Set Diet</a>
        </div>
    );
}

export default DietForm;