import { SectionContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "SectionContainer",
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>Lorem ipsum dolor sit, amet consecturi adpiscing elit. Atqeu doloribus debitis minima nam.</p>
            </div>
        )
    },
    argTypes: {
        children: { type: '' }
    },
}

export const Template = (args) => {
    return <SectionContainer {...args} />
}