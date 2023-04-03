import { NavLinks } from ".";
import links from './mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "NavLinks",
    component: NavLinks,
    args: {
        links,
    },
};

export const Template = (args) => {
    return (
        <NavLinks {...args} />
    )
}