import styled from "styled-components"

export const Nav = styled.div`
    background-color: var(--color-dark-green);
    color: var(--color-white);
`

export const Navcontainer = styled.div`
    display: flex;
    gap: 2.5rem;
    left: 25.25em;
    margin: 0 26.375em 0 25.25em;
    width: 53%;
`

export const NavbarLeft = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    padding: .875rem 0;
`
export const NavbarRight = styled.div`
    padding: .875rem 0;
    display: flex;
    gap: .725em;
    align-items: center;
    cursor: pointer;
`

export const DropdowSection = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
`

export const NavItemSection = styled.div`
    display: flex;
    gap: 1.5em;
`

export const Droptext = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

export const Dropicon = styled.img`
    height: .4275rem;
`

export const Navline = styled.img`
    border:  rgba(255, 255, 255, 0.2);
`

export const Previousicon = styled.img`
    height: 1.04em;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: var(--color-white);
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.21875rem;
    cursor: pointer;
`