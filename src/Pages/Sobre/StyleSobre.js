import styled from "styled-components";

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
  width: 600px;
  height: 100%;
  overflow: hidden;
`
export const BoxSobre = styled.div`
  display: flex;
  height: 80%;
  background-color: #E8C39C;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  align-items: center;
  padding: 2em;
  flex-direction: column;
  border: solid black;
  border-top: none;
  color: #333333;
`
export const Up = styled.img`
  display: none;
  @media only screen and (max-width:491px){
    display: flex;
    position: fixed;
    bottom: 2em;
    right: 1em;
    width: 3em;
    height: 3em;
  }
`
export const SkillTitle = styled.p`
  margin-top: 2em;
  margin-bottom: 1em;
`
export const BoxList = styled.div`
  border: solid black;
  border-radius: 2em;
  box-shadow: #333333 1px 1px 5px 1px;
  background-color: #B6936F;
  width: 100%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  ul{
    padding: 2em;
    width: 10em;
  }
  li{
    list-style: disc;
    margin-top: 0.5em;
  }
`
export const BoxTec = styled.section`
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
  padding: 2em;
  height: 80%;
`
export const BoxHeader = styled.div`
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  text-align: center;
  background-color: #e8c39e;
  border: solid black;
  border-bottom: none;
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
export const BoxHardSkill = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
export const Tec = styled.div`
  border: solid black;
  margin-bottom: 1em;
  border-radius: 2em;
  width: 12em;
  height: 8em;
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
