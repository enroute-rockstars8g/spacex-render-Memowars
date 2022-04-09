import React, { useState, useEffect } from 'react';
import { getCapsula } from '../services/service';
import { ICapsula } from '../interfaces/ICapsulas';
import { InfoCard } from './InfoCardCapsules';

const Capsulas = () => {
  const [capsulas, setCapsulas] = useState<ICapsula[]>([]);

  const getCapsulas = async () => {
    const recievedCapsules = await getCapsula();
    setCapsulas(recievedCapsules);
  };

  useEffect(() => {
    getCapsulas();
  }, []);

  return (
    <div className="w-full h-full bg-black text-center">
      <h1 className="text-white font-bold text-3xl absolute left-1/2 right-1/2 z-10 mt-2">
        Capsulas
      </h1>
      <div className="h-screen p-4 flex flex-wrap  gap-4 justify-center overflow-auto py-12">
        {capsulas.map((capsula: ICapsula) => (
          <InfoCard capsula={capsula} />
        ))}
      </div>
    </div>
  );
};

export default Capsulas;
