import React from "react";
import * as Styles from './styles';
import { Heading } from '../Heading';
import P from 'prop-types';

export const LogoLink = ({ text, srcImage = '', link }) => {
    return (
        <Styles.Container href={link}>
            <Heading size="small" uppercase>
                {!!srcImage && <img src={srcImage} alt={text} />}
                {!srcImage && text}
            </Heading>
        </Styles.Container>
    );
}

LogoLink.propTypes = {
    text: P.string.isRequired,
    srcImage: P.string,
    link: P.string.isRequired,
}