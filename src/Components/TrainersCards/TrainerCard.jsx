import React from 'react';
import './TrainerCard.css';

const TrainerCard = ({trainer}) => {
    return (
      <div className='card ma3 shadow-2 br4'>
      <div className='imgBox'>
          <img src={`${trainer.profileUrl}`} alt='Taj Mahal'></img>
      </div>
      <div className='content br4'>
          <h1>{trainer.name}</h1>
          <p>{trainer.description}</p>
      </div>
      </div>

    );
}

export default TrainerCard;