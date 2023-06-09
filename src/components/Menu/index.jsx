import { useState } from "react";
import P from "prop-types";
import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <>
            <Styled.Button
                onClick={() => setIsMenuVisible(true)}
                visible={isMenuVisible}
                aria-label="Open/Close menu"
            >
                {isMenuVisible ? (
                    <CloseIcon aria-label="Close menu" />
                ) : (
                    <MenuIcon aria-label="Open menu" />
                )}
            </Styled.Button>
            <Styled.Container visible={isMenuVisible} onClick={() => setIsMenuVisible(false)}>
                <SectionContainer>
                    <Styled.MenuContainer>
                        <LogoLink {...logoData} />
                        <NavLinks links={links} />
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </>
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired,
}