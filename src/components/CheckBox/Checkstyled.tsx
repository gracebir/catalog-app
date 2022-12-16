import styled from "styled-components";

type checkProps = {
    isChecked: boolean
}

export const CheckWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const InputCheck = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding:.1em .1em;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const Checked = styled.div<checkProps>`
    display: ${props => props.isChecked ? `block`:`none`};
    background-color: var(--color-green);
    width: 90%;
    height: 90%;
    border-radius: 3px;
`

export const CheckText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
`