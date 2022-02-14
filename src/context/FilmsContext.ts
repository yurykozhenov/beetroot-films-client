import React from "react";
import { FilmT } from "../types";

const FilmsContext = React.createContext<{
  films: FilmT[];
  setFilms: React.Dispatch<React.SetStateAction<FilmT[]>>;
}>({
  films: [],
  setFilms: () => {},
});

export default FilmsContext;
