import styled from "styled-components"

export const TypingBox = styled.div`
  width: 80%;
`

export const TypingName = styled.p`
  width: 100%;
  margin: 1em auto;
  animation: typing 2s steps(13), blink 0.5s linear infinite alternate;
  overflow: hidden;
  color: #333333;
  white-space: nowrap;
  border-right: 3px solid;
  font-size: 90%;
  text-align: center;
  @keyframes typing {
    from {
    width: 0em;
  }
  
  }
  @keyframes blink {
  50% {
    border-color: #000021;
  }
}
`