import React from 'react';
import nave from '../assets/start.png';
import { ICapsula } from '../interfaces/ICapsulas';
import 'animate.css';
export const InfoCard = ({ capsula }: { capsula: ICapsula }) => {
  return (
    <div className="rounded-lg w-80 h-80 mt-4 bg-gray-600 bg-opacity-20 text-center pt-2 animate__animated animate__backInLeft hover:bg-gray-800 hover:m-2 transition-duration: 1s box-content">
      <h1 className="text-white">CSS3</h1>
      <div className="flex justify-center my-4 relative">
        <div className="h-12 w-full mt-4 absolute bg-gradient-to-r from-green-300 to-indigo-600 bg-opacity-70"></div>
        <img src={nave} alt="naveImg" className="rounded-full w-20 z-10" />
      </div>
      <div className="text-white text-left mx-4 ">
        <p>Landings: {capsula.landings}</p>
        <p>Original Launch: {capsula.original_launch}</p>
        <p>Reuse Count: {capsula.reuse_count}</p>
        <p>Status: {capsula.status}</p>
        <p>Type: {capsula.type}</p>
      </div>
    </div>
  );
};
