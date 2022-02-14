import { FilmT } from "../types";
import axios from "axios";

const apiUrl = "http://localhost:8000";

// export async function getFilmsOld(): Promise<FilmT[]> {
//   const data = await fetch(`${apiUrl}/films`);
//   const films = await data.json();
//   console.log(films);

//   return films;
// }

export async function getFilms() {
  const response = await axios.get<FilmT[]>(`${apiUrl}/films`);
  return response.data;
}

export async function getFilm(id: string) {
  const response = await axios.get<FilmT>(`${apiUrl}/films/${id}`);
  return response.data;
}

export async function deleteFilm(id: number) {
  await axios.delete(`${apiUrl}/films/${id}`);
}

export async function editFilm(id: number, newFilm: FilmT) {
  await axios.put(`${apiUrl}/films/${id}`, newFilm);
}

export const filmsService = {
  async addFilm(newFilm: FilmT) {
    await axios.post(`${apiUrl}/films`, newFilm);
  },
};

export async function addFilm(newFilm: FilmT) {
  await axios.post(`${apiUrl}/films`, newFilm);
}
