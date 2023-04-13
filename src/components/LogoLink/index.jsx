import React from "react";
import * as Styles from './styles';
import { Heading } from '../Heading';
import P from 'prop-types';

export const LogoLink = ({ text, srcImg = '', link }) => {
    return (
        <Heading size="small" uppercase>
            <Styles.Container href={link}>
                {!!srcImg && <img src={srcImg} alt={text} />}
                {!srcImg && text}
            </Styles.Container>
        </Heading>
    );
}

LogoLink.propTypes = {
    text: P.string.isRequired,
    srcImg: P.string,
    link: P.string.isRequired,
}