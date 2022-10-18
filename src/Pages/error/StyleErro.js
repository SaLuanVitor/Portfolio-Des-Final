import styled from "styled-components";

export const ErrorPag = styled.section`
  margin-top: 1em;
`

export const ErrorBox = styled.div`
  display: flex;
  background-color: #E8C39C;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  align-items: center;
  padding: 1em;
  flex-direction: column;
  color: #333333;
  p{
    border: solid black;
    border-radius: 3em;
    padding: 1em;
    box-shadow: #333333 1px 1px 5px 1px;
    font-size: 2rem;
    text-align: center;
    color: red;
  }
`