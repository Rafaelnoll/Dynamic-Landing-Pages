import { SectionBackground } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "SectionBackground",
    component: SectionBackground,
    args: {
        children: (
            <div>
                <h1>SectionBackground</h1>
                <p>Lorem ipsum dolor sit, amet consecturi adpiscing elit. Atqeu doloribus debitis minima nam.</p>
            </div>
        ),
        background: false,
    },
    argTypes: {
        children: { type: '' }
    },
}

export const Template = (args) => {
    return <SectionBackground {...args} />
}