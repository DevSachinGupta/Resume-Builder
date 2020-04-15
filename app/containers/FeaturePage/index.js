/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';

export default function FeaturePage() {
  return (
    <div>
      <div class="z-20 mt-24 pb-6 mb-6 flex items-center text-center" style={{'background-image': 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'}}>
        <div class="flex flex-col w-full justify-center items-center pt-6 md:pt-16">
            <div class="px-3">
                <h1 class="pt-6">
              <span class="bg-brand font-bold text-center text-white text-3xl sm:text-4xl px-3 mb-5 sm:mb-16" style={{'box-decoration-break': 'clone','WebkitBoxDecorationBreak': 'clone'}}><span>Tailwind Starter Components</span></span>
            </h1>
                <p class="max-w-3xl mx-auto leading-normal my-6 font-bold text-base lg:text-xl text-left lg:text-center">These components are all open source and built using the standard Tailwind CSS configuration. Feel free to use them for any purpose, even commercially!</p>
            </div>
        </div>
      </div>

      <div class="container max-w-xl m-auto flex flex-wrap items-center justify-start">
        <a href="/builder">
            <button class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">Start Project</button>
        </a>
      </div>

      <section class="bg-white py-4 font-sans">
    <div class="container max-w-xl m-auto flex flex-wrap items-center justify-start">
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"><img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
                <div class="p-6 flex flex-col justify-between ">
                    <h3 class="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker</h3>
                    <p class="inline-flex items-center"><span class="text-gray-700 text-sm">Read More</span></p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"><img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
                <div class="p-6 flex flex-col justify-between ">
                    <h3 class="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker</h3>
                    <p class="inline-flex items-center"><span class="text-gray-700 text-sm">Read More</span></p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"><img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
                <div class="p-6 flex flex-col justify-between ">
                    <h3 class="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker</h3>
                    <p class="inline-flex items-center"><span class="text-gray-700 text-sm">Read More</span></p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"><img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
                <div class="p-6 flex flex-col justify-between ">
                    <h3 class="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker</h3>
                    <p class="inline-flex items-center"><span class="text-gray-700 text-sm">Read More</span></p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"><img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
                <div class="p-6 flex flex-col justify-between ">
                    <h3 class="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker</h3>
                    <p class="inline-flex items-center"><span class="text-gray-700 text-sm">Read More</span></p>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  );
}
