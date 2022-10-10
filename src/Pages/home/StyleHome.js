import styled from "styled-components";

export const Section = styled.section`
  border: solid black;
  background-color: #000021;
  margin: 0 auto;
  padding: 2em;
  max-width: 1900px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`

export const BoxPerfil = styled.div`
  border-radius: 2em;
  width: 30vw;
  background-color: #e8c39e;
`

export const BoxNav = styled.div`
  border-radius: 2em;
  background-color: #e8c39e;
  width: 50vw;
  
`

export const Typing = styled.p`
  width: 80%;
  animation: typing 2s steps(15), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  border-right: 5px solid;
  font-size: 3em;
  margin: 0 auto;
  @keyframes typing {
    from {
    width: 2em;
  }
  
  }
  @keyframes blink {
  50% {
    border-color: #385f8f;
  }
}
`

