import Home from ".";
import { renderTheme } from "../../styles/render-theme";

import { BrowserRouter, Route, Routes, } from "react-router-dom";

describe("<HOME/>", () => {
  it("renders the template Home", () => {
    const { container } = renderTheme(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
