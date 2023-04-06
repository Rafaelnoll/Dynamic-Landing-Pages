import { Base } from ".";
import mock from "./mock";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Templates/Base',
    component: Base,
    args: mock,
}

export const Template = (args) => {
    return <Base {...args} />
}