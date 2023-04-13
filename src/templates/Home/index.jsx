import { useState, useEffect } from "react";
import { mapData } from "../../api/map-data";

import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";

import { Base } from "../Base";
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";

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
    return <PageNotFound />
  }

  if (data && !data.slug) {
    return <Loading />
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn {...section} key={key} />
        }

        if (component === 'section.section-content') {
          return <GridContent {...section} key={key} />
        }

        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />
        }

        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />
        }

        return null;
      })}
    </Base>
  )
}

export default Home;
