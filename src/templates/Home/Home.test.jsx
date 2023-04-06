import Home from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<HOME/>", () => {
  it("renders the template Home", () => {
    const { container } = renderTheme(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
