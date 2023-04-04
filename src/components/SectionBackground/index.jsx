import React from "react";
import * as Styles from './styles';
import P from 'prop-types';
import { SectionContainer } from "../SectionContainer";

export const SectionBackground = ({ children, background = false }) => {
    return (
        <Styles.Container background={background}>
            <SectionContainer>
                {children}
            </SectionContainer>
        </Styles.Container>
    )
}

SectionBackground.propTypes = {
    children: P.node,
    background: P.bool,
}