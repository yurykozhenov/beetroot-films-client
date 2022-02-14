import { render, unmountComponentAtNode } from "react-dom";
import WelcomePage from "./WelcomePage";

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

test("should render 'Welcome on Films Library!' text by default", () => {
  render(<WelcomePage />, container);
  expect(container.textContent).toBe("Welcome on Films Library!");
});

test("should render 'Welcome on React!' text when siteName prop is 'React'", () => {
  render(<WelcomePage siteName="React" />, container);
  expect(container.textContent).toBe("Welcome on React!");
});
