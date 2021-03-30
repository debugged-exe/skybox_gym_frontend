import React from 'react';
import 'tachyons';
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import './Footer.css';

const Footer = () => {
    return(
        <>
            <span className='flex widgets justify-center items-center'>
                <p className='flex flex-column justiy-between items-end bg-white shadow-2 br4 pa2'>
                    <a className='' href='https://wa.me/917006616995'><ImWhatsapp color = 'green' size = '2.2rem'/></a>
                </p>
            </span>
        <footer className='flex justify-between bg-black white items-center ph2 flex-wrap'>
            <span>
                <p>© Copyright 2018, Skybox Athlete.com</p>                
            </span>
            <span>
                <p>Developed by <span className='b'><a href="https:www.debuggedexe.com">Debugged.exe</a></span> </p>                
            </span>
            <span className='flex justify-between items-center'>
                <a className='ph2 f3 white dim link' target='_blank' style={{outline:'none'}} rel="noreferrer" href='https://instagram.com/skybox_athlete?igshid=1qhklyh746pgg'><GrInstagram/></a>               
                <a className='ph2 f3 white dim link' target='_blank' style={{outline:'none'}} rel="noreferrer" href='https://www.facebook.com/skybox6593'><FaFacebookSquare/></a>               
                <a className='ph2 f3 white dim link' target='_blank' style={{outline:'none'}} rel="noreferrer" href='https://twitter.com/skybox_athlete?s=08'><FaTwitterSquare/></a>               
                <a className='ph2 f3 white dim link' target='_blank' style={{outline:'none'}} rel="noreferrer" href='https://wa.me/918530912121'><IoLogoWhatsapp/></a>               
            </span>
        </footer>
        </>
    );
}

export default Footer;