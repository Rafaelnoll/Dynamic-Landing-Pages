import { useState } from "react";
import { Base } from "../Base";
import mockBase from '../Base/mock';
import * as Styled from './styles';
import { mapData } from "../../api/map-data";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      // eslint-disable-next-line no-restricted-globals
      const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathName ? pathName : 'landing-page';

      try {
        const data = await fetch(`http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep`)
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch {
        setData(undefined);
      }
    }

    loadData();
  }, []);

  if (data === undefined) {
    return <h1>Page not found</h1>
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>
  }

  return (
    <Styled.Wrapper>
      <Base {...mockBase} />
    </Styled.Wrapper>
  )
}

export default Home;
