import React from "react";
import * as Styles from './styles';
import P from 'prop-types';

export const SectionContainer = ({ children }) => {
    return (
        <Styles.Container>
            {children}
        </Styles.Container>
    );
}

SectionContainer.propTypes = {
    children: P.node,
}