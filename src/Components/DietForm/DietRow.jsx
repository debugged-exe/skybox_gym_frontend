import React,{useState} from 'react';
import {MdModeEdit} from 'react-icons/md';
import {RiDeleteBinFill} from 'react-icons/ri';
import {ImCancelCircle} from 'react-icons/im';

const DietRow = ({content}) => {
    
    const [time,setTime] = useState(content.time)
    const [item,setItem] = useState(content.item)
    const [qty,setQty] = useState(content.qty)
    const [disabled,setDisabled] = useState(true)
    const changeHandler = (event) => {
        const {name,value} = event.target;
        switch (name) {
            case 'time':
                setTime(value);
                break;
            case 'item':
                setItem(value);
                break;
            case 'qty':
                setQty(value);
                break;
            default:
                break;
        }
    }

    return(
        <tr>
          <td class="pv3 pr3 bb b--black-20"><input name='time' class="input-reset ba b--black-20 pa2 mb2 db" type="text" placeholder={time}  onChange={(event)=>changeHandler(event)} aria-describedby="name-desc" disabled={disabled}/></td>
          <td class="pv3 pr3 bb b--black-20"><input name='item' class="input-reset ba b--black-20 pa2 mb2 db" type="text" placeholder={item}  onChange={(event)=>changeHandler(event)} aria-describedby="name-desc" disabled={disabled}/></td>
          <td class="pv3 pr3 bb b--black-20"><input name='qty' class="input-reset ba b--black-20 pa2 mb2 db" type="text" placeholder={qty} onChange={(event)=>changeHandler(event)}  aria-describedby="name-desc" disabled={disabled}/></td>
          <td>{disabled?<div class="f2 link dim ph3 pv0 mb2 dib white bg-dark-blue pointer" onClick={()=> setDisabled(null)}><MdModeEdit size={'1.5rem'} /></div>:<div class="f2 link dim ph3 pv0 mb2 dib white bg-dark-blue pointer" onClick={()=> setDisabled(true)}><ImCancelCircle size={'1.5rem'}/></div>}</td>
          <td><div class="f2 link dim ph3 pv0 mb2 dib white bg-dark-blue"><RiDeleteBinFill size={'1.5rem'}/></div></td>
        </tr>
    )
} 

export default DietRow;