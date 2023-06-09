/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import { screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { Heading } from "."
import { renderTheme } from "../../styles/render-theme"
import { theme } from "../../styles/theme"


describe("<Heading/>", () => {
    it("should render with default values", () => {
        renderTheme(<Heading>text</Heading>);
        const heading = screen.getByRole("heading", { name: "text" });

        expect(heading).toHaveStyle({
            color: theme.colors.primaryColor,
            "font-size": theme.font.sizes.large,
            "text-transform": "none",
        })
    });

    it("should render with white color", () => {
        renderTheme(<Heading colorDark={false}>text</Heading>);
        const heading = screen.getByRole("heading", { name: "text" });

        expect(heading).toHaveStyle({
            color: theme.colors.white,
        })
    });

    it("should render correct heading sizes", () => {
        const { rerender } = renderTheme(<Heading size="small">text</Heading>);
        const heading = screen.getByRole("heading", { name: "text" });

        expect(heading).toHaveStyle({
            "font-size": theme.font.sizes.medium,
        });

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size="medium">text</Heading>
            </ThemeProvider>
        );

        expect(heading).toHaveStyle({
            "font-size": theme.font.sizes.big,
        });

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size="big">text</Heading>
            </ThemeProvider>
        );

        expect(heading).toHaveStyle({
            "font-size": theme.font.sizes.large,
        });

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size="huge">text</Heading>
            </ThemeProvider>
        );

        expect(heading).toHaveStyle({
            "font-size": theme.font.sizes.xhuge,
        });
    });

    it("should render correct font-size when using mobile", () => {
        renderTheme(<Heading size="huge">text</Heading>);
        const heading = screen.getByRole("heading", { name: "text" });

        expect(heading).toHaveStyleRule(
            "font-size",
            theme.font.sizes.large,
            {
                media: theme.media.ltmedium,
            }
        );
    });

    it("should render with uppercase letters", () => {
        renderTheme(<Heading uppercase>text</Heading>);
        const heading = screen.getByRole("heading", { name: "text" });

        expect(heading).toHaveStyle({
            "text-transform": "uppercase",
        });
    });

    it("should render with correct heading element", () => {
        const { container } = renderTheme(<Heading as="h6">text</Heading>);
        const h6 = container.querySelector("h6");

        expect(h6.tagName.toLowerCase()).toBe("h6");
    });

    it("should match snapshot", () => {
        renderTheme(<Heading>text</Heading>);
        const heading = screen.getByRole("heading", { name: "text" });

        expect(heading).toMatchSnapshot();
    })

});