import React,{useState} from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';
import './Navbar.css';

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
        <div>
            <nav className={`flex bg-black white items-center justify-between pv0 mv0 flex-wrap w-100 ${navbar}`}>
                <span>
                    <div style={{height:'60px', width:'60px'}} className='mh2'>
                        <img style={{height:'100%', width:'100%'}} src='http://skyboxathlete.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-17-at-1.44.44-PM-1.jpeg' alt='Logo'/>
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
                        <Link style={{cursor:'point',backgroundColor:'#00D0FF'}} className='f4 grow ph3 mv0 br2 black b pa2 pointer' to='/enroll'>Enroll Now</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2' to='/'>Home</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2' to='#0'>Events</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2' to='#0'>Blog</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2' to='#0'>About Us</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2' to='#0'>Contact Us</Link>
                        <Link className='none ph3 f4 mv0 tc pt2 point btn btn-left pointer pl2' to='/signin'>SignIn</Link>
                        <Link className='tc'><p className={`f6 link dim ph3 pv2 mb2 dib white bg-dark-blue cross`} href='#0'
                        onClick={()=>hamburger()}
                        >
                        X
                        </p>
                        </Link>
                    </ul>
                </span>
            </nav>
        </div>
    );
}

export default Navbar;