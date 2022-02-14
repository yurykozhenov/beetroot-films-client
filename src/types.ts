export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface FilmT {
  id: number;
  title: string;
  director: string;
  duration: number | string;
  price: number | string;
  img: string;
  featured: boolean;
  description: string;
}
