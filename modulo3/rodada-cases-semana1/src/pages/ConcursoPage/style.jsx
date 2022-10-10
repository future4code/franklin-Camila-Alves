import { Box, MenuItem, Select } from "@mui/material"
import styled from "styled-components"

export const ContainerPage = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bgColor};
    /* ${(props) => props.backgroundColors} */

    @media screen and (max-width: 524px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100vw;
        height: 100vh;
    }

    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        width: 1600px;
    }
    
`

export const ContainerSelect = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 524px;
    height: 400px;
    font-family: 'Montserrat', sans-serif;
    padding: 60px 0 0 0;

    @media screen and (min-width: 1000px) {
        padding: 0;
    }
`

export const StyleSelect = styled(Select)`
    background-color: #FFFFFF;
    color: #333333; 
    width: 233px;
    height: 51px;

    @media screen and (min-width: 1000px) {
        padding: 0;
        margin: 0 0 374px 0;
    }
`

export const StyleItem = styled(MenuItem)`
    background-color: #FFFFFF;
    color: #333333;
`

export const ContainerLogo = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 83.75px 0 0 0;
    font-family: 'Montserrat', sans-serif;
    @media screen and (min-width: 1000px) {
        padding: 0;
    }
`

export const ContainerDesktop = styled(Box)`
    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 0 380px 0;
    }
    @media screen and (max-width: 524px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
`

export const Logo = styled.img`
    width: 63.99px;
    height: 62.4px;
    padding: 0 0 11.85px 0;
    @media screen and (min-width: 1000px) {
        padding: 0 22.67px 0 0;
        height: 55.3084716796875px;
        width: 59.285545349121094px;
    }
`

export const Loteria = styled.h1`
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 700;
    padding: 0 0 75px 0;
    margin: 0;
    @media screen and (min-width: 1000px) {
        padding: 0;
    }
`

export const Concurso = styled.p`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
    padding: 0 0 20px 0; 
    margin: 0;
    @media screen and (min-width: 1000px) {
        padding: 0;
    }
`

export const ContainerResult = styled(Box)`
    font-family: 'Montserrat', sans-serif;
    background-color: #EFEFEF;
    color:#333333;
    display: flex;
    align-items: center;

    @media screen and (max-width: 524px) {
        width: 100%;
        height: 100%;
        overflow: scroll;
        clip-path: circle(200% at 50% 208%);
    }

    @media screen and (min-width: 1000px) {
        margin: 0;
        padding: 0;
        border-radius: 50% 0 0 50%;
        height: 100vh;
        width: 100vh;
        transform: scaleY(2);
    }
`

export const Numbers = styled(Box)`

    @media screen and (max-width: 524px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0 71px;
        width: 524px;
        height: 300px;
        gap: 26px;
    }

    @media screen and (min-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 110px;
        gap: 35px;
        transform: scaleY(0.5);
    }
`

export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #FFFFFF;
    color: #333333;
    width: 76px;
    height: 76px;
    font-size: 20px;
    font-weight: 700;

    @media screen and (min-width: 1000px) {
        padding: 0;
        height: 106.3623046875px;
        width: 111.19659423828125px;
        font-size: 27px;
    }
`

export const Footer = styled.p`
    display: flex;
    text-align: center;

    @media screen and (max-width: 524px) {
        padding: 37px 0 ;
    }

    @media screen and (min-width: 1000px) {
        padding: 0;
    }
`
