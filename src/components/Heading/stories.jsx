import { Heading } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Heading",
    component: Heading,
    args: {
        children: "Qualquer coisa",
    },
    argTypes: {
        children: { type: "string" },
    },
    parameters: {
        backgrounds: {
            default: "dark"
        }
    }
}

export const Light = (args) => <Heading {...args} />
export const Dark = (args) => <Heading {...args} />

Light.parameters = {
    backgrounds: {
        default: "light",
    },
}

Dark.args = {
    children: "O texto está claro",
    colorDark: false,
}