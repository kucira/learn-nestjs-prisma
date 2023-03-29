export type TodoDto = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  owner?: {
    id: number;
    name: string;
  };
  userId?: number;
};
