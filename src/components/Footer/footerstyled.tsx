import styled from "styled-components";
import {AiOutlineArrowUp} from 'react-icons/ai'

export const FooterContainer = styled.div`
    height: 32.6875em;
    width: 100%;
    background-color: var(--color-white);
    padding-top: 7.5em;
    display: flex;
    flex-direction: row-reverse;
`

export const FooterMainContainer = styled.div`
    width: 58%;
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
`

export const FooterMainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4.4em;
    margin-bottom: 7.375em;
`

export const FooterContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 13.8125em;
    gap: 1em;
    img{
        width: 50%;
    }
`

export const LogoText = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    font-weight: 400;
`

export const FooterLinkSections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
`

export const FooterLink= styled.p`
    font-size: 1.125rem;
    font-weight: 400;
`

export const ContactHeader = styled.p`
    font-size: 1.125rem;
    font-weight: 600;
`

export const FooterText = styled.p`
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    margin-top: 1.10em;
`

export const Mailtext = styled.p`
    font-weight: 400;
    font-size: 16;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3em;
`

export const ScrollButton = styled.div`
    width: 4.0625em;
    height: 9.75em;
    background-color: var(--color-green);
    bottom: 0;
    margin-right: 17.4em;
    display: flex;
    position: fixed;
    justify-content: center;
    padding: 1.875em 0;
    border-radius: 30px 30px 0 0;
    img{
        width: 1.25em;
        height: 1.3em;
        cursor: pointer;
    }
`