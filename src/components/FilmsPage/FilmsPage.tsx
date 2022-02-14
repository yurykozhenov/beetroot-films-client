import React, { useContext } from "react";
import classes from "./FilmPage.module.css";
import Film from "./Film";
// import {data} from "../../films"
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FilmT } from "../../types";
import FilmsContext from "../../context/FilmsContext";
import { deleteFilm } from "../filmsServices";

const FilmsPage = ({ admin }: any) => {
  const { films, setFilms } = useContext(FilmsContext);
  let navigate = useNavigate();

  function addFilm() {
    console.log("Yes");
    navigate(`/films/newfilm`);
  }

  async function removeFilm(film) {
    await deleteFilm(film.id);

    setFilms((prevFilms) => {
      const updatedFilms = prevFilms.filter((item) => item.id !== film.id);
      for (let i = 0; i < updatedFilms.length; i++) {
        updatedFilms[i].id = i;
      }

      return updatedFilms;
    });
  }

  // console.log(films);
  return (
    <div>
      {admin && (
        <Button sx={{ margin: 2 }} onClick={addFilm} variant="outlined">
          Add film
        </Button>
      )}
      <div
        className={classes.list}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {films.map((film: FilmT) => {
          return (
            <Film film={film} admin={admin} remove={removeFilm} key={film.id} />
          );
        })}
      </div>
    </div>
  );
};

export default FilmsPage;
