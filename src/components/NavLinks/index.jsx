import React from "react"
import * as Styles from './styles';
import P from 'prop-types';
import { MenuLink } from "../MenuLink";

export const NavLinks = ({ links = [] }) => {
    return (
        <Styles.Container>
            {links.map(link => (
                <MenuLink key={link.link} {...link} />
            ))}
        </Styles.Container>
    )
}

NavLinks.propTypes = {
    links: P.arrayOf(P.shape({
        children: P.string.isRequired,
        link: P.string.isRequired,
        newTab: P.bool,
    })
    ),
}