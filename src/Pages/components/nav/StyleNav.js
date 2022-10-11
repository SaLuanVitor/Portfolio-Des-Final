import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  border: solid white;
  margin: 2em auto;
  width: 90%;
  padding: 1em;
  li{
    transition: 0.5s all;
    font-family: cursive;
    padding: 1em;
    color: #000021;
    border: solid transparent 3px;
    color: #333333;
    :hover{
      cursor: pointer;
      border: solid white;
    }
  }
`
export const BoxNav = styled.div`
  border-radius: 2em;
  background-color: #e8c39e;
  width: 600px;
  height: 100vh;
  border: solid whitesmoke;
`