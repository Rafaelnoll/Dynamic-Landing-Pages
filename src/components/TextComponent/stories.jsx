import { TextComponent } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "TextComponent",
    component: TextComponent,
    args: {
        children: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nemo ut culpa, ab architecto molestiae labore. Id molestiae nesciunt impedit, 
        veritatis ab vel natus necessitatibus, voluptatibus illum quas, architecto 
        debitis esse.`,
    },
    argTypes: {
        children: { type: "string" },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};