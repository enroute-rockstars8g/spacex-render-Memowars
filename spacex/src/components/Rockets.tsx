import React, { useEffect, useState } from 'react';
import { getRocket } from '../services/service';
import { InfoCardRocket } from './InfoCardRocket';
import { IRockets } from '../interfaces/IRockets';

export const Lanzamientos = () => {
  const [rockets, setRockets] = useState<IRockets[]>([]);

  const getRockets = async () => {
    const recievedCapsules = await getRocket();
    setRockets(recievedCapsules);
  };

  useEffect(() => {
    getRockets();
  }, []);
  return (
    <div className="w-full bg-black text-center ">
      <h1 className="text-white font-bold text-3xl absolute left-1/2 right-1/2 z-10 ">
        Rockets
      </h1>
      <div className="h-screen p-4 flex flex-wrap  gap-4 justify-center overflow-auto py-12">
        {rockets.map((rocket: IRockets) => (
          <InfoCardRocket rocket={rocket} />
        ))}
      </div>
    </div>
  );
};
