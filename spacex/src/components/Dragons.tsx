import React, { useEffect, useState } from 'react';
import { IDragon } from '../interfaces/IDragons';
import { getDragon } from '../services/service';
import { InfoCardDragon } from './InfoCardDragon';

const Falcon = () => {
  const [dragons, setDragons] = useState<IDragon[]>([]);

  const getdragons = async () => {
    const recievedCapsules = await getDragon();
    setDragons(recievedCapsules);
  };

  useEffect(() => {
    getdragons();
  }, []);

  return (
    <div className="w-full bg-black text-center ">
      <h1 className="text-white font-bold text-3xl absolute left-1/2 right-1/2 z-10">
        Dragons
      </h1>
      <div className="h-screen p-4 flex flex-wrap  gap-4 justify-center overflow-auto py-12">
        {dragons.map((dragon: IDragon) => (
          <InfoCardDragon dragon={dragon} />
        ))}
      </div>
    </div>
  );
};

export default Falcon;
