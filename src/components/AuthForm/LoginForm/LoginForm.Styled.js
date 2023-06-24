import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
 margin: auto;
 background-color: #151515;
 width: 424px;
 height: 332px;
 border-radius: 8px;
 padding: 40px;
 text-align: left;
`
export const Nav = styled.div`
margin-bottom: 40px;
`
export const Input = styled.input`
  display: block;
  min-width:352px;
  background-color:  #1F1F1F;
  opacity:0.4;
  border: 1px solid #bedbb0);
  border-radius: 8px;
  padding:14px 18px;
  margin-bottom: 14px;
  &::placeholder{
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      color:#FFFFFF
      }
`
export const Link = styled(NavLink)`
display: inline-block;
  text-align: start;
 font-weight: 500;
  font-style: normal;
  font-size: 18px;
  margin-right: 14px;
  color: #FFF;
  opacity: 0.3;
  &: hover {
    color: #FFF;
  }
`
export const  Fields = styled .div`
margin-bottom: 24px;
`
export const Button = styled.button`
    text-align: center;
    height: 49px;
    width: 390px;
    border-radius: 8px;
    background-color: #bedbb0;
    font-size: 14px;
    font-weight: 500;
`
