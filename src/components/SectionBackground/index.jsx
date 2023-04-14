import React from "react";
import * as Styles from './styles';
import P from 'prop-types';
import { SectionContainer } from "../SectionContainer";

const randonId = () => `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi);

export const SectionBackground = ({ children, background = false, sectionId = '' }) => {
    const id = sectionId ? sectionId : randonId();

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