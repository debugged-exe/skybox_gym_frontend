import React,{useState} from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {ReactComponent as Logo} from '../../Assets/Logo.svg';

const Navbar = ()  => {

    const [navbar,setNavbar] = useState('navbar')
    const [dropdown, setDropdown]  = useState('hidden');
    const [line, setLine]  = useState('show');
    const hamburger = () => {
        if (dropdown==='hidden'){
            setDropdown('visible')
            setNavbar('navbar-resp')
            setLine('hide')
        }
        else{
            setDropdown('hidden');
            setNavbar('navbar')
            setLine('show')
        }
    }

    return(
            <nav className={`flex bg-black white items-center justify-between pv0 mv0 flex-wrap w-100 ${navbar}`}>
                <span>
                    <div style={{height:'60px', width:'60px'}} className='mh2'>
                        <Logo style={{height:'100%', width:'100%'}} alt='Logo'/>
                    </div>
                </span>
                <span className={`hamburger ${line} pr2`}
                onClick={()=>hamburger()}
                >
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
            </span>
                <span className={`${dropdown}`}>
                    <ul style={{listStyle:'none'}} className={`flex ph4 ${navbar} justify-center items-center ${dropdown}`}>
                        <Link style={{cursor:'point',backgroundColor:'#00D0FF'}} className='f4 grow ph3 mv0 br2 black b pa2 pointer flex justify-center items-center' to='/#enquire'>Enquire Now</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2 flex justify-center items-center' to='/'>Home</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2 flex justify-center items-center' to='#0'>Events</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2 flex justify-center items-center' to='#0'>Blog</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2 flex justify-center items-center' to='#0'>About Us</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2 flex justify-center items-center' to='#0'>Contact Us</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2 flex justify-center items-center' to='/signin'>SignIn</Link>
                        <p className='tc'><Link className={`f6 link dim ph3 pv2 mb2 dib white bg-dark-blue cross flex justify-center items-center`} href='#0'
                        onClick={()=>hamburger()}
                        >
                        X
                        </Link>
                        </p>
                    </ul>
                </span>
            </nav>
    );
}

export default Navbar;