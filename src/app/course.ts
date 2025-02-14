export interface Course {
  id: number;
  name: string;
  description: string;
  duration: number;
  instructor: string;
}

export const courseKey = 'courses';
