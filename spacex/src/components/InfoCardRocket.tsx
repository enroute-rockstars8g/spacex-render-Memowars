import React from 'react';
import nave from '../assets/start.png';
import { IRockets } from '../interfaces/IRockets';
import 'animate.css';
export const InfoCardRocket = ({ rocket }: { rocket: IRockets }) => {
  return (
    <div className="rounded-lg w-80 h-80 mt-4 bg-gray-600 bg-opacity-20 text-center pt-2 animate__animated animate__backInLeft hover:bg-gray-800 hover:m-2 transition-duration: 1s box-content">
      <h1 className="text-white">Rocket</h1>
      <div className="flex justify-center my-4 relative">
        <div className="h-12 w-full mt-4 absolute bg-gradient-to-r from-green-300 to-indigo-600 bg-opacity-70"></div>
        <img src={nave} alt="naveImg" className="rounded-full w-20 z-10" />
      </div>
      <div className="text-white text-left mx-4 ">
        <p>Name: {rocket.name}</p>
        <p>Cost per launch: {rocket.cost_per_launch}</p>
        <p>Weight(KG): {rocket.mass.kg} KG</p>
        <p>First Flight: {rocket.first_flight}</p>
        <p className="overflow-clip">Wikipedia: {rocket.wikipedia}</p>
      </div>
    </div>
  );
};
