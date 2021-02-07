import React from 'react';
import 'tachyons';
import 'tailwindcss/tailwind.css'

const PackageCard = ({packageOl}) => {
    return (
      <section class="text-gray-700 ba ma2 pa4 br4 grow pointer body-font w-20-ns w-80-m">
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
                  <button
                      class="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
                      Enroll Now
                  </button>
              </div>
          </div>
      </div>
  </section>
    )
}

export default PackageCard;