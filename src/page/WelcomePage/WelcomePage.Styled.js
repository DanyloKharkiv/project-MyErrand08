import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.section`
    background-image: linear-gradient(180deg,
        rgba(196, 196, 196, 0) 25%,
        #bedbb0 92.19%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const Wrapper = styled.div`
    display: flex;
    gap: 14px;
`
export const IMG = styled.img`
    margin-top: 166px;
    margin-bottom: 24px;
`

export const Link = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #161616;
    text-align: center;
    height: 49px;
    width: 344px;
    border-radius: 8px;
    background-color: transparent;
    border-color: transparent;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
    letter-spacing: 0.28px;
    &: hover{
    
    background-color: #000;
    color: #FFF}
    `
export const Title = styled.p `
    color: #161616;
    font-size: 40px;
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: -1.6px;
    margin: 0;
    
`
export const Text = styled.p `
    font-size: 14px;
    font-family: Poppins;
    line-height: 18px;
    letter-spacing: 0.28px;
    color: #161616;
    width: 473px;
    text-align: center;
    margin-bottom: 48px;
`