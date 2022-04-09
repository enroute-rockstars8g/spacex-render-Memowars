import React from 'react';
import { getCapsula } from '../services/service';
import { InfoCard } from './InfoCard';

const Capsulas = () => {
  console.log(
    getCapsula(1).then((res) => {
      console.log(res);
    })
  );

  return (
    <div className="w-full h-full bg-black text-center">
      <h1 className="text-white font-bold text-3xl absolute left-1/2 right-1/2 z-10 mt-2">
        Capsulas
      </h1>
      <div className="h-screen p-4 flex flex-wrap  gap-4 justify-center overflow-auto py-12">
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Capsulas;
