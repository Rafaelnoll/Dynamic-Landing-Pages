import { Base } from ".";
import mock from "./mock";
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Templates/Base',
    component: Base,
    args: {
        children: (
            <>
                <GridText {...gridMock} background />
                <GridText {...gridMock} />
                <GridText {...gridMock} background />
                <GridText {...gridMock} />
                <GridText {...gridMock} background />
            </>
        ),
        ...mock,
    },
}

export const Template = (args) => {
    return <Base {...args} />
}