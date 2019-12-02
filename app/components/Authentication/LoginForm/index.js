import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosBrowsers } from 'react-icons/io';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import HR from '../../Layout/HR';
import './style.css';
import FloatingLabelTextfield from "../../FloatingLabelTextfield";

class LoginForm extends React.Component {
  // onClick(e) {
  //   // console.log("clicked called");
  //   e.target.previousElementSibling.focus();
  // }
  // onkeyUp(e) {
  //   // console.log("Keyup called : ");
  //   // console.log(e);
  //   // console.log(e.target.value);
  //   if(e.target.value != "") {
  //     e.target.classList.add("filled");
  //   } else {
  //     e.target.classList.remove("filled");
  //   }
  // }
  render() {
    return (
      <section className="loginFormContainer">
        <div className="flex flex-wrap bg-white rounded overflow-hidden shadow-lg">
          <div className="w-full md:w-1/3 bg-white my-auto">
            <div className="bg-white max-w-xl px-12 py-6  text-lg flex items-center inline-block">
              <IoIosBrowsers className="mr-4" />
              Corporation
            </div>
            <div className="bg-white max-w-xl px-12">
              <h5 className="text-2xl font-bold mb-2">Get your idea here</h5>
              <p className="text-sm mb-8">
                Welcome Back, Please login to your account
              </p>
              <div className="mb-4 relative">
                
                <FloatingLabelTextfield 
                  id="email"
                  fieldtype="text"
                  labeltxt="Email Address"
                  autofocus
                  borderColor="inputBorderColor1"
                ></FloatingLabelTextfield>
                
                
                {/* <input
                  className="input inputBorderColor1 border-l-4 border border-gray-400 appearance-none w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                  id="email"
                  type="text"
                  autoFocus
                  onKeyUp={this.onkeyUp}
                />
                <label
                  htmlFor="email"
                  className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
                  onClick={this.onClick}
                >
                  Email Address
                </label> */}
              </div>
              <div className="mb-4 relative">
                
              <FloatingLabelTextfield 
                  id="password"
                  fieldtype="password"
                  labeltxt="Password"
                  color="2"
                  borderColor="inputBorderColor2"
                ></FloatingLabelTextfield>

                {/* <input
                  className="input inputBorderColor2 border-l-4 border border-gray-400 appearance-none w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                  id="password"
                  type="password"
                  onKeyUp={this.onkeyUp}
                />
                <label
                  htmlFor="password"
                  className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
                  onClick={this.onClick}
                >
                  Password
                </label> */}
              </div>
            </div>

            <div className="flex flex-wrap bg-white max-w-xl px-12 pb-12 items-center justify-between">
              <label className="custom-label flex">
                <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2  rounded border">
                  <input type="checkbox" className="opacity-0 absolute" />
                  <svg
                    className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                  {/* <svg class="hidden w-4 h-4 text-green-600 pointer-events-none" viewBox="0 0 172 172">
                    <g fill="none" stroke-width="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal">
                      <path d="M0 172V0h172v172z"/><path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" fill="currentColor" stroke-width="1"/>
                    </g>
                    </svg> */}
                </div>
                <span className="select-none font-thin text-sm">
                  {' '}
                  Remember me
                </span>
              </label>
              <a
                className="inline-block align-baseline font-thin text-sm  hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex flex-wrap bg-white max-w-xl px-12 pb-12">
              <button className="border bg-indigo-600 border-gray-400 hover:bg-white hover:text-blue-800 hover:shadow-xl text-white py-2 px-6">
                Login
              </button>
              <Link
                to="/signup"
                class="border bg-indigo-600 border-gray-400 hover:bg-white hover:text-blue-800 hover:shadow-xl text-white ml-2 py-2 px-6"
              >
                Sign Up
              </Link>
            </div>

            <div className="flex bg-white max-w-xl px-12 pb-3 items-center ">
              <span className="w-1/3 select-none .font-normal text-center text-sm">
                {' '}
                Or login with
              </span>
              <div className="w-2/3 ml-5 items-center flex justify-between ">
                <div
                  className="inline-block font-normal text-sm text-blue-800"
                  href="#"
                >
                  Google
                </div>
                <div
                  className="inline-block font-normal text-sm text-blue-800"
                  href="#"
                >
                  Linkedin
                </div>
                <div
                  className="inline-block font-normal text-sm  text-blue-800 hover:text-blue-800"
                  href="#"
                >
                  Facebook
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
			<div className="carousel-inner relative overflow-hidden h-full w-full">
			

				<input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"></input>
				<div class=" h-full w-full carousel-item absolute opacity-0" >
					<div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
				</div>
				<label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
				<label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
				
				<input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""></input>
				<div class="h-full w-full carousel-item absolute opacity-0" >
					<div class="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
				</div>
				<label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
				<label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 


				<input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""></input>
				<div class="h-full w-full carousel-item absolute opacity-0" >
					<div class="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
				</div>
				<label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
				<label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


				<ol class="carousel-indicators">
					<li class="inline-block mr-3">
						<label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
					</li>
					<li class="inline-block mr-3">
						<label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
					</li>
					<li class="inline-block mr-3">
						<label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
					</li>
				</ol>
				
			</div>
			
			
          </div>
        </div>
      </section>
    );
  }
}
export default LoginForm;
