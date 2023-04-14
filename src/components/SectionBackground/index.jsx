import React from "react";
import * as Styles from './styles';
import P from 'prop-types';
import { SectionContainer } from "../SectionContainer";

export const SectionBackground = ({ children, background = false, sectionId = '' }) => {
    const id = sectionId ? sectionId : '';

    return (
        <Styles.Container background={background} id={id}>
            <SectionContainer>
                {children}
            </SectionContainer>
        </Styles.Container>
    )
}

SectionBackground.propTypes = {
    children: P.node.isRequired,
    background: P.bool,
    sectionId: P.string,
}