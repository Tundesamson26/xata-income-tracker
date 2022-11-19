/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';

const Header = ({ totalIncome } : any) => {
  return (
    <header>
      <h1 className="text-3xl font-bold text-[#888]">Income Tracker</h1>
      <Image
        className=" object-cover rounded-lg"
        width={80}
        height={1}
        src="https://res.cloudinary.com/beswift/image/upload/v1647849821/samples/cloudinary-icon.png"
        alt="plant"
      />
      <div className="total-income">${totalIncome}</div>
    </header>
  );
}

export default Header