import React, { useEffect, useState } from 'react';

const Parallax = ({ image, children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})`}}
      ></div>
      <div className="relative flex items-center justify-center h-full text-white text-center p-8 z-10">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
