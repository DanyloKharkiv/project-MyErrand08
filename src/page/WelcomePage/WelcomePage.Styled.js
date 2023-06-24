
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.section`
    background-image:  linear-gradient(180deg,
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
    color: #161616;
    text-align: center;
    height: 49px;
    width: 344px;
    border-radius: 8px;
    
    border-color: transparent;
    font-size: 14px;
    font-weight: 500;
    &: hover{
        
    background-color: #000;
    color: #FFF}
    `
export const Title = styled.p `
    font-size: 40px;
    font-weight: 600;
    margin: 0;
    
`
export const Text = styled.p `
    font-size: 14px;
    font-weight: 400;
    width: 473px;
    text-align: center;
    margin-bottom: 48px;
`