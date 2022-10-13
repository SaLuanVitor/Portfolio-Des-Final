import styled from "styled-components"

export const Section = styled.section`
  background-color: #000021;
  margin: 0 auto;
  max-width: 1900px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow: scroll;
  @media only screen and (max-width:506px){
    height: 100%;
  }
`
export const Content = styled.div`
  border-radius: 2em;
  background-color: #B6936F;
  padding: 1em;
  border: solid black;
  width: 100%;
  height: 100%;
`
export const BoxProjeto = styled.section`
  background-color: #E8C39C;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black;
  border-top: none;
  color: #333333;
  overflow: scroll;
  padding: 1em;
  height: 80%;
`

export const ContentProjeto = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`
export const Tec = styled.div`
  border: solid black;
  margin-bottom: 1em;
  border-radius: 2em;
  width: 30em;
  height: 30em;
  box-shadow: #333333 1px 1px 5px 1px;
  background-color: #B6936F;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img{
    width: 46px;
    height: 42px;
  }
  p{
    font-size: 0.8rem;
  }
`
export const BoxProject = styled.div`
  width: 50%;
  border: solid black;
  border-radius: 2em;
  background-color: #B6936F;
  padding: 1em;
  height: 6em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  img{
    margin-top: 0.5em;
    margin-left: 0.5em;
    width: 20px;
    height: 20px;
  }
`