export interface ICapsula {
  id: string;
  landings: number;
  original_launch: Date;
  reuse_count: number;
  status: string;
  type: string;
}

export const initialCapsula: ICapsula = {
  id: '',
  landings: 0,
  original_launch: new Date(1999, 25, 1),
  reuse_count: 0,
  status: '',
  type: '',
};
