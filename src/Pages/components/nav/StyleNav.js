import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxNav = styled.div`
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  text-align: center;
  background-color: #e8c39e;
  border: solid black;
  h2{
    font-size: 1.2rem;
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
    border-bottom: solid black;
    padding-bottom: 1em;
    padding-top: 1em;
    background-color: #B6936F;
  }
`
export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`
export const LinkLi = styled(Link)`
    transition: 0.5s all;
    text-decoration: none;
    font-family: cursive;
    width: 33.33%;
    padding: 0.5em;
    background-color: white;
    color: #000021;
    border: solid black 1px;
    color: #333333;
    :hover{
      cursor: pointer;
      text-decoration: underline 2px;
    }
`
export const LinkA = styled.a`
  transition: 0.5s all;
    text-decoration: none;
    font-family: cursive;
    width: 33.33%;
    padding: 0.5em;
    background-color: white;
    color: #000021;
    border: solid black 1px;
    color: #333333;
    :hover{
      cursor: pointer;
      text-decoration: underline 2px;
    }
`