import { renderTheme } from "../../styles/render-theme";
import { GridTwoColumn } from ".";
import { screen } from "@testing-library/react";
import mock from './mock';

describe("<GridTwoColumn/>", () => {
    it("should render two column grid", () => {
        const { container } = renderTheme(<GridTwoColumn {...mock} />);
        expect(container.firstChild).toMatchSnapshot();
    });
})