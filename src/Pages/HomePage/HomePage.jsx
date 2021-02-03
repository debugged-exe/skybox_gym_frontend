import React from 'react';
import About from '../../Components/AboutUs/About';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Home from '../../Components/Home/Home';
import PackageList from '../../Components/PackageCards/PackageList';
import TrainerCardList from '../../Components/TrainersCards/TrainerCardList';
import TransformationCardList from '../../Components/TransformationCards/TransformationCardList';

const HomePage = () => {
    return(
        <>
            <Home/>
            <TransformationCardList/>
            <TrainerCardList/>
            <PackageList/>
            <About/>
            <ContactUs/>
        </>
    );
}

export default HomePage;