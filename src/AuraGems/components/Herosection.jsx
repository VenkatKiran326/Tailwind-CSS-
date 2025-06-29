import React from 'react'

export const Herosection = () => {
  return (
    <div>
        <section class=" body-font bg-[var(--color-BgColor)] text-[var(--color-TextColor)]">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[var(--color-TextColorHead)]">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten</h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg">Learn more</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Buy</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748959368/Tailwind%20css%20project%201/photo-1621329109234-d7657d2f3846_ptqztc.jpg"/>
    </div>
  </div>
</section>
    </div>
  )
}
