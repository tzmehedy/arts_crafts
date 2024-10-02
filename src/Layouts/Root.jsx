import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Root = () => {
    return (
      <div>
        <div className='h-20'>
          <Header></Header>
        </div>
        <div className="min-h-[calc(100vh-300px)]">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Root;