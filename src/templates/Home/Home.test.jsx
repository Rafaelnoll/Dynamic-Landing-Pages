import { screen } from "@testing-library/react";
import Home from ".";
import { renderTheme } from "../../styles/render-theme";


test("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", { name: /hello/i }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: "blue",
  })

  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule("background", "blue");
});
