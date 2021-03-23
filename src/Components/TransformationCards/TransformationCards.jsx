import React from 'react';
import './TransformationCards.css';

const TransformationCards = ({transform}) => {
    return(
            <div className='w-90 flex justify-center items-center flex-column flex-wrap'>
                <div className='flex justify-around items-center wrapping'>
                    <section class="tc pa5-ns">
                        <article class="hide-child relative ba b--black-20 mw5 center">
                            <img style={{height:'350px',width:'200px'}} src={transform.beforeUrl} class="db" alt="before" />
                        </article>
                    </section>
                    <section class="tc pa5-ns">
                        <article class="hide-child relative ba b--black-20 mw5 center">
                            <img style={{height:'350px',width:'200px'}} src={transform.afterUrl} class="db" alt="after" />
                        </article>
                    </section>
                </div>
                <h2 className='ma0'  data-aos='fade-up'>{transform.name}</h2>
                <p className='pa4 tc padding pt0'  data-aos='fade-up'>{transform.transformationStory}</p>
            </div>
    );
}

export default TransformationCards;