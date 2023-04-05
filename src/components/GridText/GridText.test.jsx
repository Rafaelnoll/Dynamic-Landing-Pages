import { renderTheme } from "../../styles/render-theme";
import { GridText } from ".";
import mock from './mock';

describe("<GridText/>", () => {
    it("should render grid text", () => {
        const { container } = renderTheme(<GridText {...mock} background={undefined} />);
        expect(container.firstChild).toMatchSnapshot();
    });
})