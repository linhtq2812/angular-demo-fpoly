export interface Course {
  id: number;
  name: string;
  description: string;
  dururation: number;
  instructor: string;
}

export const courseKey = 'courses';
