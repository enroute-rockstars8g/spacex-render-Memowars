interface Mass {
  kg: string;
  lb: string;
}

export interface IRockets {
  name: string;
  cost_per_launch: number;
  mass: Mass;
  description: string;
  first_flight: Date;
  wikipedia: string;
}
export const initialDragon: IRockets = {
  name: '',
  cost_per_launch: 0,
  mass: { kg: '', lb: '' },
  description: '',
  first_flight: new Date(1999, 25, 1),
  wikipedia: '',
};
