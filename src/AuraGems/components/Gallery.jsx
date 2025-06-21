import React from "react";

export const Gallery = () => {
  return (
    <div>
      <section className=" body-font bg-[var(--color-BgColor)] text-[var(--color-TextColor)]">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-[var(--color-TextColorHead)] lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748958132/Tailwind%20css%20project%201/GettyImages-1489355351_qe3gp0.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748958132/Tailwind%20css%20project%201/Colorful-Crystals_zpjv2d.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748958132/Tailwind%20css%20project%201/6676_minohk.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748958131/Tailwind%20css%20project%201/Aura-and-Other-Treated-Crystals-Why-I-Love-Them-Now-Mooncat-Crystals-759_oiebon.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748958133/Tailwind%20css%20project%201/Tumbled_Stones_10a5c203-610e-48f9-b1e1-47541f1784cf_fzpgwv.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748958132/Tailwind%20css%20project%201/healing-crystals_johtmv.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
