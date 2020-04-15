/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
  // <div>
  //   <h5>This is Home Page</h5>
  // </div>

    <div>
      <nav className="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
        <a href="/" className="block text-left">
          <img
            src="https://stitches.hyperyolo.com/images/logo.png"
            className="h-10 sm:h-10 rounded-full"
            alt="logo"
          />
        </a>
        <ul className="text-sm text-gray-700 list-none p-0 flex items-center">
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Pricing
            </a>
          </li>
          <li className="pr-2">
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              FAQs
            </a>
          </li>
          <li className="pl-2 border-l">
            <a
              href="/login"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Log In
            </a>
          </li>
          <button className="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
            Sign Up
          </button>
          <a
              href="/features">
            <button className="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3">
              Get Started
            </button>
            </a>
        </ul>
      </nav>
      {/* <section className="font-sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center" style="background:url(https://source.unsplash.com/random/1920x1080) no-repeat center;"> */}
      <section className="font-sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center">
        <div className="bg-white text-black rounded-full h-16 w-16 flex items-center justify-center mb-8"><i className="fas fa-play ml-1"></i></div>
        <label htmlFor="" className="uppercase tracking-extrawide text-white text-xs font-hairline mt-8">Watch Video</label>
        <h3 className="text-white mx-auto max-w-sm mt-4 font-normal text-2xl leading-normal">Differentiate Yourself And Attract
      More Attention Sales And Profits</h3>
      </section>
      <section className="font-sans container max-w-xl m-auto flex flex-col lg:flex-row justify-center my-8">
        <div className="order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8">
          <div
            class="w-12 h-12 rounded-full bg-gray-300 mb-2"
            alt="Avatar of Jonathan Reinink"
          />
          <h2 className="text-black mb-2 font-normal">Praesent placerat.</h2>
          <p className="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 rounded-full bg-gray-300 mb-2"
            alt="Avatar of Jonathan Reinink"
          />
          <h2 className="text-black mb-2 font-normal">
            Fusce pellentesque suscipit nibh.
          </h2>
          <p className="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 rounded-full bg-gray-300 mb-2"
            alt="Avatar of Jonathan Reinink"
          />
          <h2 className="text-black mb-2 font-normal">
            Ut aliquam sollicitudin leo.
          </h2>
          <p className="text-gray-700 leading-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-6 lg:mb-0">
          <img
            src="https://stitches.hyperyolo.com/images/demo-phone.png"
            alt=""
          />
        </div>
        <div className="order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8">
          <div
            class="w-12 h-12 rounded-full bg-gray-300 mb-2"
            alt="Avatar of Jonathan Reinink"
          />
          <h2 className="text-black mb-2 font-normal">
            Cras iaculis ultricies nulla.
          </h2>
          <p className="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 rounded-full bg-gray-300 mb-2"
            alt="Avatar of Jonathan Reinink"
          />
          <h2 className="text-black mb-2 font-normal">
            Praesent placerat risus quis eros.
          </h2>
          <p className="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 rounded-full bg-gray-300 mb-2"
            alt="Avatar of Jonathan Reinink"
          />
          <h2 className="text-black mb-2 font-normal">
            Nunc dignissim risus id metus.
          </h2>
          <p className="text-gray-700 leading-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </section>
      <section className="bg-gray-300 font-sans">
        <div className="container m-auto flex flex-col md:flex-row max-w-xl">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start py-8">
            <label htmlFor="tagline" className="uppercase tracking-loose">best app ever</label>
            <h1 className="my-4 font-normal">Our Work Flow</h1>
            <p className="leading-normal mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit.</p>
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">Learn More
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:py-6">
            <img
              src="https://stitches.hyperyolo.com/images/demo-devices.png"
              alt="image"
              class="w-full"
            />
          </div>
        </div>
      </section>
      <section className="my-8 font-sans container max-w-xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
        <div className="w-full lg:w-1/2"><img src="https://stitches.hyperyolo.com/images/demo-phone.png" alt=""/></div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <label
            for="tagline"
            class="uppercase tracking-wide text-gray-700 font-bold"
          >
            best app ever
          </label>
          <h1 className="my-4 font-normal">Our Work Flow</h1>
          <p className="leading-normal mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section className="my-8 pt-8 font-sans container max-w-xl m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <label
            for="tagline"
            class="uppercase tracking-wide text-gray-700 font-bold"
          >
            best app ever
          </label>
          <h1 className="my-4 font-normal">Our Work Flow</h1>
          <p className="leading-normal mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full lg:w-1/2"><img src="https://stitches.hyperyolo.com/images/demo-phone.png" alt=""/></div>
      </section>
      <section className="antialiased font-sans w-full bg-gray-300 text-left text-black py-8">
        <div className="container mx-auto max-w-xl py-8 font-normal leading-normal">
          <h3 className="text-2xl">Grow Your Business</h3>
          <p className="">
            Build high performing teams, establish design practices, mentor and
            grow the next generation of great designers, and design interfaces
            and experiences.
          </p>
          <div className="max-w-sm mt-4 sm:flex">
            <input type="email" className="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0" name="email" placeholder="Enter your email" required=""/>
            <button className="uppercase text-sm text-white focus:outline-0 w-full sm:w-auto bg-black hover:bg-gray-900 focus:bg-gray-300 tracking-wide px-6">Subscribe</button>
          </div>
        </div>
      </section>
      <section className="font-sans container m-auto max-w-xl flex flex-col flex-wrap sm:flex-row justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label htmlFor="" className="uppercase tracking-loose font-bold text-sm">
            Basic Plan
          </label>
          <h1 htmlFor="" className="uppercase tracking-loose font-bold text-5xl my-2">
            $29<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">5</strong>Projects
          </p>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">20</strong>Images
          </p>
          <p className="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">9/5</strong>Support
          </p>
          <button className="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label htmlFor="" className="uppercase tracking-loose font-bold text-sm">
            Team Plan
          </label>
          <h1 htmlFor="" className="uppercase tracking-loose font-bold text-5xl my-2">
            $59<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">10</strong>Projects
          </p>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">40</strong>Images
          </p>
          <p className="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">12/7</strong>Support
          </p>
          <button className="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label htmlFor="" className="uppercase tracking-loose font-bold text-sm">
            Corporate Plan
          </label>
          <h1 htmlFor="" className="uppercase tracking-loose font-bold text-5xl my-2">
            $79<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Projects
          </p>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Images
          </p>
          <p className="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">24/7</strong>Support
          </p>
          <button className="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label htmlFor="" className="uppercase tracking-loose font-bold text-sm">
            Enterprise Plan
          </label>
          <h1 htmlFor="" className="uppercase tracking-loose font-bold text-5xl my-2">
            $199<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Projects
          </p>
          <p className="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Images
          </p>
          <p className="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">24/7</strong>Support
          </p>
          <button className="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
      </section>
      <section className="font-sans text-center py-8 px-4 lg:px-0 bg-gray-300">
        <div className="container flex flex-col sm:flex-row bg-white max-w-xl m-auto shadow">
          <div className="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center">
            <h2 className="capitalize font-medium">Ready to get started?</h2>
            <p className="text-gray-700 mt-2 mb-6">But I must explain to you how all this mistaken idea of denouncing </p>
          </div>
          <div className="w-full sm:w-1/4 flex justify-start sm:justify-center items-center pl-6 pb-6 sm:pl-0 sm:pb-0">
            <button className=" bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide">Learn More</button>
          </div>
        </div>
      </section>
      <section className="font-sans flex justify-between mt-6 mx-auto max-w-xl">
        <a href="#" className="w-1/4 flex flex-col items-center text-center text-xs text-black no-underline">
          <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mb-2 z-10">
            <i class="fas fa-check" />
          </div>
          <label className="font-bold uppercase tracking-wide">Step 1</label>
        </a>
        <a href="#" className="w-1/4 relative flex flex-col items-center text-center text-xs text-black no-underline">
          <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mb-2 z-10">
            <i class="fas fa-check" />
          </div>
          <div className="absolute h-1 mt-4 bg-black inset-x-0 -translate-50-50" />
          <label className="font-bold uppercase tracking-wide">Step 2</label>
        </a>
        <a href="#" className="w-1/4 relative flex flex-col items-center text-center text-xs text-black no-underline">
          <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center mb-2 z-10">
            <i class="fas fa-check" />
          </div>
          <div className="absolute h-1 mt-4 bg-black inset-x-0 -translate-50-50" />
          <label className="font-bold uppercase tracking-wide">Step 3</label>
        </a>
        <a href="#" className="w-1/4 relative flex flex-col items-center text-center text-xs text-black no-underline">
          <div className="bg-gray-700 text-white rounded-full h-8 w-8 flex items-center justify-center mb-2 z-10">
            <i class="fas fa-check" />
          </div>
          <div className="absolute h-1 mt-4 bg-gray-700 inset-x-0 -translate-50-50" />
          <label className="font-bold uppercase tracking-wide text-gray-700">
            Step 4
          </label>
        </a>
      </section>
      <section className="font-sans container m-auto text-center py-8">
        <label htmlFor="tagline" className="uppercase tracking-wide font-bold text-gray-700">Various Aspects</label>
        <h1 className="mt-2 mb-4 font-medium max-w-sm m-auto">Those are important in Vanue Management</h1>
        <hr className="border-b w-8 m-auto my-6"/>
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
            <div className="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
            <h2 className="my-4 font-medium">Cras ornare tristique elit.</h2>
            <p className="leading-normal mb-4 text-gray-700">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
            <div className="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
            <h2 className="my-4 font-medium">Vivamus vestibulum ntulla nec ante.</h2>
            <p className="leading-normal mb-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
            <div className="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
            <h2 className="my-4 font-medium">Praesent placerat risus quis eros.</h2>
            <p className="leading-normal mb-4 text-gray-700">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
            <div className="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
            <h2 className="my-4 font-medium">Fusce pellentesque suscipit nibh.</h2>
            <p className="leading-normal mb-4 text-gray-700">Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-4 font-sans">
        <div className="container max-w-xl m-auto flex flex-wrap items-center justify-start">
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
              <img className="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
              <div className="p-6 flex flex-col justify-between ">
                <h3 className="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker
                </h3>
                <p className="inline-flex items-center">
                  <span className="text-gray-700 text-sm">Read More</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
              <img className="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
              <div className="p-6 flex flex-col justify-between ">
                <h3 className="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker
                </h3>
                <p className="inline-flex items-center">
                  <span className="text-gray-700 text-sm">Read More</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
              <img className="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
              <div className="p-6 flex flex-col justify-between ">
                <h3 className="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker
                </h3>
                <p className="inline-flex items-center">
                  <span className="text-gray-700 text-sm">Read More</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
              <img className="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
              <div className="p-6 flex flex-col justify-between ">
                <h3 className="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker
                </h3>
                <p className="inline-flex items-center">
                  <span className="text-gray-700 text-sm">Read More</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
              <img className="w-full" src="https://source.unsplash.com/random/400x225" alt="Sunset in the mountains"/>
              <div className="p-6 flex flex-col justify-between ">
                <h3 className="font-medium text-gray-900 mb-4 leading-normal">Desktop Publishing Software like Aldus PageMaker
                </h3>
                <p className="inline-flex items-center">
                  <span className="text-gray-700 text-sm">Read More</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="font-sans bg-black text-white py-8 px-4">
        <div className="mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between">
          <a href="/" className="block mr-4 w-1/2">
            <img src="https://stitches.hyperyolo.com/images/logo-white.png" className="w-32" alt="logo"/>
          </a>
          <div className="w-1/2 flex text-sm mt-6 lg:mt-0">
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">Product</li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Popular</a></li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Trending</a></li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Catalog</a></li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Features</a></li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">Company</li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Press Release</a>
              </li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Mission</a></li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Strategy</a></li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Works</a></li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li className="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">Info</li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Support</a></li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Developers</a></li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Customer
                </a>
              </li>
              <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline">Started Guide</a>
              </li>
            </ul>
            <div className="text-gray-700 flex flex-col">
              <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
              <div className="flex pl-4 justify-start">
                <a className="block flex items-center text-white hover:text-gray-500 mr-6 no-underline" href="#"><i
                  class="fab fa-github-alt"></i></a>
                <a className="block flex items-center text-white hover:text-gray-500 mr-6 no-underline" href="#"><i
                  class="fab fa-slack"></i></a>
                <a className="block flex items-center text-white hover:text-gray-500 no-underline" href="#"><i
                  class="fab fa-twitter"></i></a>

              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-4 text-gray-700 border-t border-gray-900 text-center"> ©2019 Hyperyolo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

HomePage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
