import React from "react";

export const Features = () => {
  return (
    <div>
      <section class="body-font text-[var(--color-TextColor)] bg-[var(--color-BgColor)]">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-[var(--color-TextColorHead)] mb-4">
              Raw Denim Heirloom Man Braid
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748962001/pngtree-watercolor-blue-crystal-png-image_13380475_mudd9o.png"
                  alt="Icon Image"
                  class="w-20 h-25 object-contain"
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-[var(--color-TextColorHead)] text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a class="mt-3 text-[var(--color-TextColorHead)] inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748961994/crystal-with-ai-generated-free-png_puvod2.png"
                  alt="Icon Image"
                  class="w-15 h-20 object-contain"
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-[var(--color-TextColorHead)] text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a class="mt-3 text-[var(--color-TextColorHead)] inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dwad4li0t/image/upload/v1748961995/watercolor-purple-crystal-png_eifl24.png"
                  alt="Icon Image"
                  class="w-20 h-18 object-contain"
                />
              </div>

              <div class="flex-grow">
                <h2 class="text-[var(--color-TextColorHead)] text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a class="mt-3 text-[var(--color-TextColorHead)] inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-white rounded text-lg">
            Explore More
          </button>
        </div>
      </section>
    </div>
  );
};
