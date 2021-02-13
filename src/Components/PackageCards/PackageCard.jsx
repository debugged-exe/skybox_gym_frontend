import React from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';
import 'tailwindcss/tailwind.css'

const PackageCard = ({packageOl}) => {
    return (
      <section class="text-gray-700 ma2 pa4 br4 grow pointer body-font w-20-ns w-80-m shadow-4" style={{backgroundColor:'#00D0ff'}} >
      <div class="container px-8 pt-24 mx-auto lg:px-4">
          <div class="flex flex-wrap text-center ">
              <div class="px-8 py-6 mx-auto lg:px-24 lg:w-2/4 md:w-full">
                  <div class="flex flex-col items-center justify-center h-48 px-2 text-center">
                      <h2
                          class="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-800 lg:text-6xl">
                          {packageOl.price}
                          <span class="ml-1 text-base text-gray-600">/mo</span>
                      </h2>
                  </div>
                  <p class="mb-4 text-base leading-relaxed">{packageOl.description}</p>
                  <Link className="f6 br2 link ph3 pv2 mb2 dib white bg-dark-blue" style={{outline:'none'}} to="/enroll">Enquire Now</Link>
              </div>
          </div>
      </div>
  </section>
    )
}

export default PackageCard;