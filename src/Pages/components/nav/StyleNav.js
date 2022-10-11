import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  li{
    transition: 0.5s all;
    font-family: cursive;
    padding: 0.5em;
    background-color: white;
    color: #000021;
    border: solid black 1px;
    width: 33.33%;
    color: #333333;
    :hover{
      cursor: pointer;
      text-decoration: underline 2px;
    }
  }
`
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