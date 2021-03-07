import React from 'react';
import About from '../../Components/AboutUs/About';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Home from '../../Components/Home/Home';
import PackageList from '../../Components/PackageCards/PackageList';
import TransformationCardList from '../../Components/TransformationCards/TransformationCardList';
import './HomePage.css';

const HomePage = () => {
    return(
        <>
            <Home/>
            <TransformationCardList/>
            <PackageList/>
            {/* <TrainerCardList/> */}
            <About/>
            <ContactUs/>
        </>
    );
}

export default HomePage;