import styled from "styled-components";

export const Section = styled.section`
  background-color: #000021;
  margin: 0 auto;
  max-width: 1900px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: scroll;
  @media only screen and (max-width:506px){
    height: 100%;
  }
`
export const BoxNav = styled.div`
  border-radius: 2em;
  background-color: #B6936F;
  padding: 1em;
  border: solid black;
  width: 600px;
  height: 100%;
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
