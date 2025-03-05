import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

function App() {
  return ( <>
    <div className="container mx-auto">
      <h1 className='text-black text-4xl font-bold'>Dashboard</h1>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5">
    <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
      <div>
        <h2 className="text-md">Total Users</h2>
        <p className="text-4xl font-bold mt-5">40 545</p>
      </div>
      <FaUsers className="text-[45px] text-secondary"/>
    </div>
    <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
      <div>
        <h2 className="text-md">Total Business Owners</h2>
        <p className="text-4xl font-bold mt-5">23 439</p>
      </div>
      <FaUser className="text-[45px] text-secondary"/>
    </div>
    <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
      <div>
        <h2 className="text-md">Total Job Seekers</h2>
        <p className="text-4xl font-bold mt-5">12 378</p>
      </div>
      <FaUserTie className="text-[45px] text-secondary"/>
    </div>
    <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
      <div>
        <h2 className="text-md">Total Freelancers</h2>
        <p className="text-4xl font-bold mt-5">4035</p>
      </div>
      <FaUserGroup className="text-[45px] text-secondary"/>
    </div>
    </div>
    </>
  );
}

export default App;
