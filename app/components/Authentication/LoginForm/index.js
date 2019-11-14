import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosBrowsers } from 'react-icons/io';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import HR from '../../Layout/HR';
import './style.css';
class LoginForm extends React.Component {
  render() {
    return (
      <section className="loginFormContainer">
        <div className="flex flex-wrap bg-white rounded overflow-hidden shadow-lg">
          <div className="w-full md:w-1/3 bg-white my-auto">
            
            <div className="bg-white max-w-xl px-12 pb-12 text-lg flex items-center inline-block">
              <IoIosBrowsers className="mr-4"/>Corporation
            </div>
            <div className="bg-white max-w-xl px-12">
              <h5 class="text-2xl font-bold mb-2">Get your idea here</h5>
			        <p class="text-sm mb-8">Welcome Back, Please login to your account</p>
              <div class="mb-4 relative">
                <input class="input inputBorderColor1 border-l-4 border border-gray-400 appearance-none w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autofocus />
                <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Email Address</label>
              </div>
              <div class="mb-4 relative">             
                <input class="input inputBorderColor2 border-l-4 border border-gray-400 appearance-none w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="password" type="password" autofocus />
                <label for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Password</label>
              </div>
            </div>

            <div className="flex bg-white max-w-xl px-12 pb-12 items-center justify-between">
              <label class="custom-label flex">
		      		  <div class="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2  rounded border">
                  <input type="checkbox" class="opacity-0 absolute"  />
                  <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                  {/* <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172">
                    <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                      <path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/>
                    </g>
                    </svg> */}
				        </div>
				        <span class="select-none font-thin text-sm"> Remember me</span>
			        </label>
              <a class="inline-block align-baseline font-thin text-sm  hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>

            <div class="bg-white max-w-xl px-12 pb-12">
              <button class="border  bg-indigo-600 border-gray-400 hover:bg-white hover:text-blue-800 hover:shadow-xl text-white py-2 px-6">Login</button>
              <Link to="/signup" class="border  bg-indigo-600 border-gray-400 hover:bg-white hover:text-blue-800 hover:shadow-xl text-white ml-2 py-2 px-6">Sign Up</Link>
            </div>
            
            <div class="flex bg-white max-w-xl px-12 pb-3 items-center ">
              <span class="w-1/3 select-none .font-normal text-sm"> Or login with</span>
              <div class="w-2/3 ml-5 items-center flex justify-between ">
                <div class="inline-block font-normal text-sm text-blue-800" href="#">Google</div>
                <div class="inline-block font-normal text-sm text-blue-800" href="#">Linkedin</div>
                <div class="inline-block font-normal text-sm  text-blue-800 hover:text-blue-800" href="#">Facebook</div>
              </div>
            </div>
            
          </div>
          <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
            <img src="https://cdn.dribbble.com/users/2785110/screenshots/7057570/media/f8307d868ba282555d3500b5319e274c.jpg" className="h-full w-full shadow" />
          </div>
        </div>
      </section>
    );
  }
}
export default LoginForm;
