import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import FilmDetailsForUser from "./FilmDetailsForUser";
import FilmDetailsForAdmin from "./FilmDetailsForAdmin";
import FilmsContext from "../../context/FilmsContext";

const FilmDetailsPage = ({ admin }: any) => {
  const { films } = useContext(FilmsContext);
  let params = useParams<{ id: string }>();
  let film = films.find((item) => item.id === Number(params.id));
  if (admin) {
    return <FilmDetailsForAdmin film={film} />;
  } else {
    return <FilmDetailsForUser film={film} />;
  }
};

export default FilmDetailsPage;
