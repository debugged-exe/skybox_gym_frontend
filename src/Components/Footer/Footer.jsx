import React from 'react';
import 'tachyons';
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
    return(
        <footer className='flex justify-between bg-black white items-center ph2 flex-wrap'>
            <span>
                <p>CopyRights</p>                
            </span>
            <span>
                <p>Privacy Policy</p>                
            </span>
            <span className='flex justify-between items-center'>
                <a className='ph2 f3 white dim link' href='0#'><FaFacebookSquare/></a>               
                <a className='ph2 f3 white dim link' href='0#'><FaTwitterSquare/></a>               
                <a className='ph2 f3 white dim link' href='0#'><IoLogoWhatsapp/></a>               
                <a className='ph2 f3 white dim link' href='0#'><GrInstagram/></a>               
            </span>
        </footer>
    );
}

export default Footer;