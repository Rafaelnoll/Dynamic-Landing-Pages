import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { NavLinks } from ".";
import linksMock from './mock';

describe('<NavLinks/>', () => {
    it('should render links', () => {
        renderTheme(<NavLinks links={linksMock} />);
        expect(screen.getAllByRole('link')).toHaveLength(linksMock.length);
    })

    it('should not render links', () => {
        renderTheme(<NavLinks />);
        expect(screen.queryAllByText(/link/i)).toHaveLength(0);
    })

    it('should match snapshot', () => {
        const { container } = renderTheme(<NavLinks links={linksMock} />);
        expect(container.firstChild).toMatchSnapshot();
    })
});