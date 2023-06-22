import styled from "styled-components";

export const Box = styled.section`
    background-image: linear-gradient(to bottom, #C4C4C4 0%, #BEDBB0 100%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const Wrapper = styled.div`
    display: flex;
    gap: 14px;
`

export const Link = styled.button`
    color: #161616;
    text-align: center;
    height: 49px;
    width: 344px;
    border-radius: 8px;
    background-color: transparent;
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
`
