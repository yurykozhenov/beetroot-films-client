import { FilmT } from "../types";

export async function addFilmToLS(newFilm: FilmT) {
  const films = await getFilmsFromLS();
  localStorage.setItem("films", JSON.stringify([...films, newFilm]));
}

export async function deleteFilmFromLS(id: number) {
  const films = await getFilmsFromLS();
  const updatedFilms = films.filter((item) => item.id !== id);
  for (let i = 0; i < updatedFilms.length; i++) {
    updatedFilms[i].id = i;
  }
  localStorage.setItem("films", JSON.stringify(updatedFilms));
}

export async function getFilmsFromLS() {
  return JSON.parse(localStorage.getItem("films"));
}
