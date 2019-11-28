import React from 'react';
import { TiChevronRight } from 'react-icons/ti';
import { IoIosBrowsers } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import HR from '../../Layout/HR';
import './style.css';
import FloatingLabelTextfield from "../../FloatingLabelTextfield";

function RegistrationFrom() {
  return (
    <section className="registrationFormContainer">
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
                  id="fullName"
                  fieldtype="text"
                  labeltxt="Full Name"
                  autofocus
                  borderColor="inputBorderColor1"
                ></FloatingLabelTextfield>
                
              </div>
              
              <div className="mb-4 relative">
                
                <FloatingLabelTextfield 
                  id="email"
                  fieldtype="text"
                  labeltxt="Email Address"
                  autofocus
                  borderColor="inputBorderColor1"
                ></FloatingLabelTextfield>
                
              </div>
              <div className="mb-4 relative">
                
              <FloatingLabelTextfield 
                  id="password"
                  fieldtype="password"
                  labeltxt="Password"
                  color="2"
                  borderColor="inputBorderColor2"
                ></FloatingLabelTextfield>
              </div>
              <div className="mb-4 relative">
                
              <FloatingLabelTextfield 
                  id="confirmPassword"
                  fieldtype="password"
                  labeltxt="Confirm Password"
                  color="2"
                  borderColor="inputBorderColor2"
                ></FloatingLabelTextfield>
              </div>
            </div>

            <div className="flex flex-wrap bg-white max-w-xl px-12 pb-12 pt-10">
              <button className="border bg-indigo-600 border-gray-400 hover:bg-white hover:text-blue-800 hover:shadow-xl text-white py-2 px-6">
                Sign Up
              </button>
              <Link
                to="/login"
                class="border bg-indigo-600 border-gray-400 hover:bg-white hover:text-blue-800 hover:shadow-xl text-white ml-2 py-2 px-6"
              >
                Login
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
            <img
              src="https://cdn.dribbble.com/users/2785110/screenshots/7057570/media/f8307d868ba282555d3500b5319e274c.jpg"
              className="h-full w-full shadow"
            />
          </div>
        </div>
      </section>

    // <div className="registrationFormContainer px-10 py-8 bg-gray-800 rounded shadow-2xl w-1/3">
    //   <div className="header">
    //     <div className="title text-4xl capitalize">Create Account</div>
    //     <div className="sub-title text-sm text-gray-600">
    //       Create your free account to get your online resume.
    //     </div>
    //   </div>
    //   <form className="registrationForm">
    //     <div className="input-group">
    //       {/* <label>Name</label> */}
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="John Doe"
    //         className="text-sm"
    //       />
    //     </div>
    //     <div className="input-group">
    //       {/* <label>Email address</label> */}
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="johndoe@gmail.com"
    //         className="text-sm"
    //       />
    //     </div>
    //     <div className="input-group">
    //       {/* <label>
    //         <span>Password</span>
    //       </label> */}
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         className="text-sm"
    //       />
    //     </div>
    //     <div className="input-group">
    //       {/* <label>
    //         <span>Confirm Password</span>
    //       </label> */}
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Confirm Password"
    //         className="text-sm"
    //       />
    //     </div>
    //     <button
    //       type="button"
    //       className="my-4 focus:outline-none rounded-full bg-purple-800 px-10 py-2 text-white hover:shadow-lg text-sm shadow"
    //     >
    //       <span>Create account</span>
    //       <TiChevronRight
    //         className="ml-1"
    //         style={{ display: 'inline-block' }}
    //       />
    //     </button>
    //   </form>
    //   <HR content="Create Account with" />
    //   <div className="social-login">
    //     <button type="button" className="google-login mr-2">
    //       <FaGoogle />
    //     </button>
    //     <button type="button" className="facebook-login ml-2">
    //       <FaFacebookF />
    //     </button>
    //   </div>
    //   <div className="footer mt-16">
    //     <div className="text-xs text-gray-600">
    //       Already Registered?{' '}
    //       <Link to="login" className="hover:text-gray-700">
    //         Login instead
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
export default RegistrationFrom;
