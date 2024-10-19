import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from "../Components/Footer"

const Root = () => {
    return (
      <div>
        <div className="h-20">
          <Header></Header>
        </div>
        <div className="min-h-[calc(100vh-300px)]">
          <Outlet></Outlet>
        </div>
        <div>
          {/* Footer */}
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;