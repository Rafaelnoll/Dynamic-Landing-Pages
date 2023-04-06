import React from "react";
import * as Styles from './styles';
import { Heading } from '../Heading';
import P from 'prop-types';

export const LogoLink = ({ text, srcImage = '', link }) => {
    return (
        <Heading size="small" uppercase>
            <Styles.Container href={link}>
                {!!srcImage && <img src={srcImage} alt={text} />}
                {!srcImage && text}
            </Styles.Container>
        </Heading>
    );
}

LogoLink.propTypes = {
    text: P.string.isRequired,
    srcImage: P.string,
    link: P.string.isRequired,
}