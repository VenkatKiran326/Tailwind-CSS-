import React from 'react'

export const Login = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-[var(--color-BgColor)]">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-[var(--color-TextColorHead)]">Sign in to Your AuraGems Journey
</h1>
      <p className="leading-relaxed mt-4 text-[var(--color-TextColor)]">Access your personalized world of handpicked crystals crafted to elevate your energy.
Reconnect with the beauty, balance, and brilliance that only AuraGems can offer.</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
        <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</section>
    </div>
  )
}
