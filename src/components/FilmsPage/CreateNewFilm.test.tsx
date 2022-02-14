import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsContext from "../../context/FilmsContext";
import CreateNewFilm from "./CreateNewFilm";
import userEvent from "@testing-library/user-event";
import { filmsService } from "../filmsServices";

test("should allow user to enter Title", () => {
  render(
    <BrowserRouter>
      <FilmsContext.Provider value={{ films: [], setFilms: () => {} }}>
        <CreateNewFilm />
      </FilmsContext.Provider>
    </BrowserRouter>
  );

  const titleInput = screen.getByPlaceholderText("Title") as HTMLInputElement;

  userEvent.type(titleInput, "Avengers");

  expect(titleInput.value).toBe("Avengers");
});

test("should allow user to create film", () => {
  render(
    <BrowserRouter>
      <FilmsContext.Provider value={{ films: [], setFilms: () => {} }}>
        <CreateNewFilm />
      </FilmsContext.Provider>
    </BrowserRouter>
  );

  userEvent.type(
    screen.getByPlaceholderText("Image url"),
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  );
  userEvent.type(screen.getByPlaceholderText("Title"), "Avengers");
  userEvent.type(screen.getByPlaceholderText("Director"), "Kevin Fangi");
  userEvent.type(screen.getByPlaceholderText("Price"), "100");
  userEvent.type(screen.getByPlaceholderText("Duration"), "180");
  userEvent.type(
    screen.getByPlaceholderText("Description"),
    "Marvel movie about superhero team"
  );

  const addFilmSpy = jest.spyOn(filmsService, "addFilm");
  userEvent.click(screen.getByRole("button", { name: /Create/i }));

  expect(addFilmSpy).toBeCalledWith({
    title: "Avengers",
    director: "Kevin Fangi",
    price: "100",
    duration: "180",
    img: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    featured: false,
    description: "Marvel movie about superhero team",
  });
});
