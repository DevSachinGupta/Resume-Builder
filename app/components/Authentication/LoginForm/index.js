import React from 'react';
import { Link } from 'react-router-dom';
import { TiChevronRight } from 'react-icons/ti';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import HR from '../../Layout/HR';
import './style.css';
class LoginForm extends React.Component {
  render() {
    return (
      <section className="bg-blue-500 flex flex-col py-12 ">
        <div className="flex flex-wrap bg-white rounded overflow-hidden shadow-lg">
          <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            A
          </div>
          <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
            <img src="https://cdn.dribbble.com/users/2785110/screenshots/7057570/media/f8307d868ba282555d3500b5319e274c.jpg" class="h-full w-full shadow" />
          </div>
        </div>
      </section>
    );
  }
}
export default LoginForm;
