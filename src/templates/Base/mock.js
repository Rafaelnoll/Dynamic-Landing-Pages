import linksMock from '../../components/NavLinks/mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    children: (
        <>
            <GridText {...gridMock} background />
            <GridText {...gridMock} />
            <GridText {...gridMock} background />
            <GridText {...gridMock} />
            <GridText {...gridMock} background />
        </>
    ),
    links: linksMock,
    logoData: {
        text: 'Logo',
        link: '#'
    },
    footerHtml: '<p>Teste de footer</p>'
}