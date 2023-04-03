import { MenuLink } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "MenuLink",
    component: MenuLink,
    args: {
        children: "MenuLink",
        link: "https://google.com.br"
    },
    argTypes: {
        children: { type: "string" },
        link: { type: "string" },
    }
};

export const Template = (args) => {
    return (
        <MenuLink {...args} />
    )
}