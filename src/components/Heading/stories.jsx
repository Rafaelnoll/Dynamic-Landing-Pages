import { Heading } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Heading",
    component: Heading,
    args: {
        children: "Qualquer coisa",
        light: false,
    },
    argTypes: {
        children: { type: "string" },
        light: { type: "boolean" },
    },
    parameters: {
        backgrounds: {
            default: "dark"
        }
    }
}

export const Light = (args) => <Heading {...args} />
export const Dark = (args) => <Heading {...args} light={true} />

Light.parameters = {
    backgrounds: {
        default: "light",
    }
}
Dark.parameters = {
    backgrounds: {
        default: "dark",
    }
}