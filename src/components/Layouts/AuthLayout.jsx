/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom"

const AuthLayout = (props) => {
    const { children, title } = props;
    return (
      <div className='flex justify-center min-h-screen bg-blue-500 items-center'>
          <div className='w-full max-w-2xl  p-5 rounded-lg  -mt-36'>
            <div className="">
            <img src="/public/Pharmadent Telp.jpg" alt="" className="h-24 w-24 mx-auto rounded-full mb-3 " />
            </div>
          <h1 className='text-3xl font-bold mb-10 text-center text-white '>{title}</h1>        

          { children }          

          </div>
      </div>
    );
};



export default AuthLayout;