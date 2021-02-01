import React from 'react';
import './TransformationCards.css';

const TransformationCards = ({transform}) => {
    return(
            <div className='ba w-90 flex justify-center items-center flex-column flex-wrap'>
                <div className='flex justify-around items-center wrapping'>
                    <section class="tc pa3 pa5-ns">
                        <article class="hide-child relative ba b--black-20 mw5 center">
                            <img src={transform.beforeUrl} class="db" alt="before" />
                        </article>
                    </section>
                    <section class="tc pa3 pa5-ns">
                        <article class="hide-child relative ba b--black-20 mw5 center">
                            <img src={transform.afterUrl} class="db" alt="after" />
                        </article>
                    </section>
                </div>
                <h2 className='ma0'>{transform.name}</h2>
                <p className='pa4 tc padding pt0'>{transform.transformationStory}</p>
            </div>
    );
}

export default TransformationCards;