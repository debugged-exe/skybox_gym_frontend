import React from 'react';
import 'tachyons';

const PackageCard = ({packageOl}) => {
    return (
        <article style={{height:'200px'}} class="br2 ba white b--white mv4 w-100 w-50-m w-25-l mw5 center">
          <div class="pa2 ph3-ns pb3-ns">
            <div class="dt w-100 mt1">
              <div class="dtc">
                <h1 class="f5 f4-ns mv0">Price</h1>
              </div>
              <div class="dtc tr">
                <h2 class="f5 mv0">{packageOl.price}</h2>
              </div>
            </div>
            <p class="f6 lh-copy measure mt2 white">{packageOl.description}</p>
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Enroll Now</a>
          </div>
        </article>
    )
}

export default PackageCard;