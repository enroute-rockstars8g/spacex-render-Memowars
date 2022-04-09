import React from 'react';
import { InfoCard } from './InfoCard';

export const Lanzamientos = () => {
  return (
    <div className="w-full bg-black text-center ">
      <h1 className="text-white font-bold text-3xl absolute left-1/2 right-1/2 z-10 ">
        Lanzamientos
      </h1>
      <div className="h-screen p-4 flex flex-wrap  gap-4 justify-center overflow-auto py-12">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};
