import styled from "styled-components";

type carouselBarProps = {
    isActive: boolean;
}

export const CarouselContainer = styled.div`
    margin: 0 auto;
    width: 74.2%;
    display: flex;
    flex-direction: column;
    gap: 2.5em;
`

export const CarouselBarSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    gap: 10px;
`

export const CarouselProductWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5em;
`

export const CarouselProductSection = styled.div`
    width: 80%;
    display: flex;
    gap: 30px;
`

export const CarouselBar = styled.div<carouselBarProps>`
    width: 6px;
    height: ${props => props.isActive ? `30px`:`1em`};
    background-color: ${props => props.isActive ? `var(--color-white)`:`rgba(255, 255, 255, 0.2)`};
    border-radius: 20px;
    transform: ${props => props.isActive ? `translateY(-50%)`: ``};
    cursor: pointer;
`

