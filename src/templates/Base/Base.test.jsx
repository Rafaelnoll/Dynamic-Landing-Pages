import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Base } from ".";

describe('<Base/>', () => {
    it('should render the base template', () => {
        renderTheme(<Base>Children</Base>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    })
})