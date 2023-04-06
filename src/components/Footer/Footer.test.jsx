import { screen } from "@testing-library/react"
import { Footer } from "."
import { renderTheme } from "../../styles/render-theme"

describe("<Footer/>", () => {
    it("should render footer", () => {
        const { container } = renderTheme(<Footer footerHtml="<h1>Ola mundo</h1>" />);
        expect(screen.getByRole('heading', { name: 'Ola mundo' })).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});