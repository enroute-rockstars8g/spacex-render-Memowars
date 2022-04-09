export interface IDragon {
  id: string;
  name: string;
  description: string;
  crew_capacity: number;
  orbit_duration_yr: number;
  wikipedia: string;
}
export const initialDragon: IDragon = {
  id: '',
  name: '',
  description: '',
  crew_capacity: 0,
  orbit_duration_yr: 0,
  wikipedia: '',
};
