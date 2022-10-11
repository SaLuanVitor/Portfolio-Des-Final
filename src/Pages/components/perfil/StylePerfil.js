import styled from "styled-components";

export const BoxPerfil = styled.section`
  font-family: cursive;
  height: 100%;
  border-radius: 2em;
  border: solid white;
  padding: 2em;
`
export const Figure = styled.figure`
  width: 60%;
  height: 30%;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -1em;
`
export const Img = styled.img`
  position: relative;
  bottom: 4em;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
export const Info = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #333333;
  h3{
    border: solid white;
    padding: 1em;
    width: 70%;
    font-size: 0.8rem;
    text-align: center;
  }
`

export const SocialFigure = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 1em auto;
  img{
    width: 30PX;
    margin-left: 0.5em;
    height: 2em;
    cursor: pointer;
  }
`
export const BoxContato = styled.div`
  width: 100%;
  margin-top: 2em;
`

export const Contato = styled.div`
    border-bottom: solid white;
    margin-bottom: 1em;
    display: flex;
  a{
    display: flex;
    text-decoration: none;
    color: #333333;
  }
  img{
    width: 30px;
    margin-right: 1em;
  }
`
export const BoxProject = styled.div`
  width: 100%;
  height: 10%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  img{
    margin-top: 0.5em;
    margin-left: 0.5em;
    width: 20px;
    height: 20px;
  }
`

