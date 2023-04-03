import { LogoLink } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "LogoLink",
    component: LogoLink,
    args: {
        text: "LogoLink",
        srcImage: "assets/images/logo.svg",
        link: "http://localhost",
    },
    argTypes: {
        srcImage: { type: "string" },
        text: { type: "string" },
        link: { type: "string" },
    },
}

export const Template = (args) => {
    return <LogoLink {...args} />
}