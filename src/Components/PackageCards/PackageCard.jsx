import React from 'react';
import 'tachyons';
import 'tailwindcss/tailwind.css'

const PackageCard = ({packageOl}) => {
    return (
      <section class="ma2 pa2 br4 grow pointer shadow-4 flex flex-column items-center justify-center" style={{backgroundColor:'#00D0ff',width:'280px',height:'250px'}} >
        <h2 className="mv0">{packageOl.price}</h2>
        <h2 className="tc mv2 mh0">{packageOl.description1}</h2>
        <p className="f4 mv2 mh0 tc">{packageOl.description2}</p>
        <a className="f6 br2 link ph3 pv2 mb2 dib white bg-dark-blue" style={{outline:'none'}} href='tel:7006616995'>Enquire Now</a>
  </section>
    )
}

export default PackageCard;