import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, grid, background = false, sectionId }) => {
    return (
        <SectionBackground background={background} sectionId={sectionId}>
            <Styled.Container>
                <Heading size="huge" colorDark={!background} uppercase as="h2">{title}</Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.Grid>
                    {grid.map((element) => (
                        <Styled.GridElement key={element.title}>
                            <Heading as="h3" size="medium" colorDark={!background}>{element.title}</Heading>
                            <TextComponent>{element.description}</TextComponent>
                        </Styled.GridElement>
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    );
};

GridText.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    grid: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            description: P.string.isRequired,
        })
    ).isRequired,
    background: P.bool,
    sectionId: P.string,
}