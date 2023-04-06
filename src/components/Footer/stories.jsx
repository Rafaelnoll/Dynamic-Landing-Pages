import { Footer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Footer",
    component: Footer,
    args: {
        footerHtml: "<p><a href='https://www.linkedin.com/in/rafael-noll-ds/'/> Feito com ❤ por Rafael</p>",
    },
    argTypes: {
        footerHtml: { type: 'string' },
    },
}

export const Template = (args) => {
    return <Footer {...args} />
}