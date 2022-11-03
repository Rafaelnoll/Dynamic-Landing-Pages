import { renderTheme } from "../../styles/render-theme";
import { TextComponent } from ".";
import { screen } from "@testing-library/react";
import { theme } from "../../styles/theme";

describe("<TextComponent/>", () => {
    it("should render a text", () => {
        renderTheme(<TextComponent>text</TextComponent>);
        const textComponent = screen.getByText("text");

        expect(textComponent).toBeInTheDocument();
    });

    it("should render with the correct font size", () => {
        renderTheme(<TextComponent>text</TextComponent>);
        const textComponent = screen.getByText("text");

        expect(textComponent).toHaveStyle({
            "font-size": theme.font.sizes.medium,
        })
    });

    it("should match snapshot", () => {
        renderTheme(<TextComponent>text</TextComponent>);
        const textComponent = screen.getByText("text");

        expect(textComponent).toMatchSnapshot();
    });

})