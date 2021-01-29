import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div  className='home-background white flex justify-center items-center flex-column ph2'>
            <h1 className='w-50 width tc'>Some Heading</h1>
            <p className='w-50 width tc'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <a class="f4 br2 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Button Text</a>
        </div>
    );
}

export default Home;