import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({ title, text, srcImg, background = false, sectionId = '' }) => {
    return (
        <SectionBackground background={background} sectionId={sectionId}>
            <Styled.Container>
                <Styled.TextContainer>
                    <Heading as="h2" uppercase colorDark={!background}>{title}</Heading>
                    <TextComponent>{text}</TextComponent>
                </Styled.TextContainer>
                <Styled.ImageContainer>
                    <Styled.Image src={srcImg} alt={title} />
                </Styled.ImageContainer>
            </Styled.Container>
        </SectionBackground>
    );
};

GridTwoColumn.propTypes = {
    title: P.string.isRequired,
    text: P.string.isRequired,
    srcImg: P.string.isRequired,
    sectionId: P.string.isRequired,
    background: P.bool,
}