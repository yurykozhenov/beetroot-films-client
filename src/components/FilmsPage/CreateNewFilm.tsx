import React, { useState, useContext } from "react";
import { Button, Card, CardContent, CardMedia, TextField } from "@mui/material";
import classes from "./styles/Textarea.module.css";
import useFilmInfo from "./useFilmInfo";
import { useNavigate } from "react-router-dom";
import { FilmT } from "../../types";
import { filmsService } from "../filmsServices";
import FilmsContext from "../../context/FilmsContext";

const CreateNewFilm = () => {
  const {
    title,
    setTitle,
    director,
    setDirector,
    description,
    setDescription,
    duration,
    setDuration,
    price,
    setPrice,
  } = useFilmInfo([]);
  const [imgUrl, setUrl] = useState("");
  const navigate = useNavigate();
  const { films, setFilms } = useContext(FilmsContext);

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    hook: any
  ) {
    hook(e.target.value);
  }

  async function create() {
    const newFilm: any = {
      // id: films.length,
      title,
      director,
      duration,
      price,
      img: imgUrl,
      featured: false,
      description,
    };
    await filmsService.addFilm(newFilm);
    setFilms((oldFilms) => [...oldFilms, newFilm]);
    navigate("/films");
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            margin: 2,
            width: "540px",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              value={imgUrl}
              placeholder="Image url"
              onChange={(e) => handleChange(e, setUrl)}
            />
            <TextField
              value={title}
              placeholder="Title"
              onChange={(e) => handleChange(e, setTitle)}
            />
            <TextField
              value={director}
              placeholder="Director"
              onChange={(e) => handleChange(e, setDirector)}
            />
            <TextField
              value={price}
              placeholder="Price"
              onChange={(e) => handleChange(e, setPrice)}
            />
            <TextField
              value={duration}
              placeholder="Duration"
              onChange={(e) => handleChange(e, setDuration)}
            />
            <textarea
              value={description}
              style={{
                height: "340px",
                border: "none",
                resize: "none",
              }}
              placeholder="Description"
              onChange={(e) => handleChange(e, setDescription)}
            />
            <Button variant="outlined" onClick={create}>
              Create
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateNewFilm;
