import { screen } from "@testing-library/react";
import Home from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<HOME/>", () => {
  it("renders learn react link", () => {
    renderTheme(<Home />);
  });
});
