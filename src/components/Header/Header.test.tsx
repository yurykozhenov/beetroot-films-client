import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

function getLinks() {
  return Array.from(container.querySelectorAll("a")).map(
    (a: HTMLAnchorElement) => ({
      text: a.textContent,
      link: a.href.replace("http://localhost", ""),
    })
  );
}

test("should display 'Home', 'Films', and 'Log In' links when user is not authorized", () => {
  render(
    <BrowserRouter>
      <Header authorized={false} />
    </BrowserRouter>,
    container
  );

  const links = getLinks();

  const expectedLinks = [
    { text: "Home", link: "/home" },
    { text: "Films", link: "/films" },
    { text: "Log in", link: "/auth" },
  ];

  expect(links).toEqual(expectedLinks);
});

test("should display 'Home', 'Films', 'Log out', and 'Profile' links when user is authorized", () => {
  render(
    <BrowserRouter>
      <Header authorized={true} />
    </BrowserRouter>,
    container
  );

  const links = getLinks();

  const expectedLinks = [
    { text: "Home", link: "/home" },
    { text: "Films", link: "/films" },
    { text: "Log out", link: "/logout" },
    { text: "Profile", link: "/profile" },
  ];

  expect(links).toEqual(expectedLinks);
});
