import React from 'react';

const TrainerCard = ({trainer}) => {
    return (
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src={trainer.profileUrl} class="br-100 h3 w3 dib" alt="staring at you"/>
    <h1 class="f4">{trainer.name}</h1>
    <hr class="mw3 bb bw1 b--black-10"/>
  </div>
  <p class="lh-copy measure center f6 black-70">{trainer.description}</p>
</article>

    );
}

export default TrainerCard;