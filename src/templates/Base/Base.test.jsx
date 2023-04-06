import { renderTheme } from "../../styles/render-theme";
import { Base } from ".";
import mockBase from './mock';

describe('<Base/>', () => {
    it('should render the base template', () => {
        const { container } = renderTheme(<Base {...mockBase}>Children</Base>);
        expect(container.firstChild).toMatchSnapshot();
    })
})